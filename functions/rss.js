exports.fetchRss = (db, funcReq, funcRes) => {
  const FeedParser = require('feedparser')
  const request = require('request')
  const uuid = require('uuid')
  const dayjs = require('dayjs')
  const tweet = require('./tweet.js')
  // const batch = db.batch()
  const maxReadRss = 500
  const oideyoList = [
    {
      themeId: 'oijavascript',
      themeName: 'おいでよJavaScript',
      rssList: [
        {
          name: '町田市役所',
          url: 'http://www.city.machida.tokyo.jp/rss_news.xml',
          tag: 'city'
        },
        {
          name: '町田イベント',
          url:
            'https://www.google.co.jp/alerts/feeds/03126527126696341489/12080350212799317987',
          tag: 'event'
        }
      ]
    }
  ]

  const setBatch = async oideyo => {
    return new Promise((resolve, reject) => {
      try {
        console.log('setBatch: ', oideyo.themeId, oideyo.themeName)
        const items = []
        for (let rss of oideyo.rssList) {
          console.log('rss: ', rss)
          const req = request(rss.url)
          const feedparser = new FeedParser()

          // On Request Error
          req
            .on('error', error => {
              console.log('request error', error)
            })
            .on('response', res => {
              if (res.statusCode !== 200) {
                return req.emit('error', new Error('Bad status code'))
              } else {
                return req.pipe(feedparser)
              }
            })

          // On handle Error
          feedparser
            .on('error', error => {
              console.log('handle error', error)
            })
            .on('readable', () => {
              let stream = feedparser
              let item = stream.read()
              while (item !== null) {
                // items.push(item)
                if (items.length < maxReadRss) {
                  items.push(item)
                } else {
                  break
                }
              }
            })
            .on('end', () => {
              parseEndFunc(rss, items, oideyo)
            })
        }
        return resolve
      } catch (e) {
        console.log(e)
        return new Error(reject)
      }
    })
  }

  const parseEndFunc = (rss, items, oideyo) => {
    try {
      // 既存postsから同RSSの最新の1件を取得
      const lastData = db
        .collection('posts')
        .where('url', '==', rss.url)
        .orderBy('date', 'desc')
        .limit(1)
      let limit = 0
      let lastPostData = ''

      // RSS挿入件数の設定
      if (items.length === 0) {
        limit = 0
      } else {
        if (maxReadRss < items.length) {
          limit = maxReadRss
        } else {
          limit = items.length
        }
        // 前回更新日時よりも新しいものだけCloud Firestoreに追加
        if (lastData.date) {
          for (let i = 0; i < limit; i++) {
            if (items[i].date > lastData.date) {
              limit = i
            } else {
              if (i === 0) {
                limit = 0
              }
              break
            }
          }
        }
      }

      if (limit > 0) {
        for (let i = 0; i < limit; i++) {
          let item = items[i]
          if (item) {
            let uniqId = uuid.v4().replace(/-/g, '')
            let title = item.title
            let url = item.link
            let date = item.date
            let imgUrl = ''
            if (item.image.url) {
              imgUrl = item.image.url
            }
            let postData = {
              id: `${3000000000 + dayjs().unix()}-${uniqId}`,
              title: title,
              url: url,
              date: date,
              tag: rss.tag,
              img_url: imgUrl,
              themeId: oideyo.themeId,
              themeName: oideyo.themeName,
              createdAt: 3000000000 + dayjs().unix()
            }
            // 1回前に更新したデータと同一タイトルのRSSの場合は更新しない
            if (postData.title !== lastPostData.title) {
              // batch.set(db.collection('posts').doc(postData.id), postData)
              db.collection('posts')
                .doc(postData.id)
                .set(postData)
              lastPostData = postData
              tweet.tweetNuxtPage(db, postData.title, postData.id)
            } else {
              lastPostData = postData
            }
          }
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  // const doBatch = () => {
  //   console.log('doBatch')
  //   batch
  //     .commit()
  //     .then(() => {
  //       return funcRes.status(200).send('OK')
  //     })
  //     .catch(() => {
  //       return new Error()
  //     })
  // }

  Promise.all(
    oideyoList.map(obj => {
      console.log('obj: ', obj)
      return setBatch(obj)
    })
  )
    .then(() => {
      // return doBatch()
      return funcRes.status(200).send('OK')
    })
    .catch(err => {
      return funcRes.status(500).send(`Error adding document: ${err}`)
    })
}
