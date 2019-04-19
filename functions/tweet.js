exports.tweetNuxtPage = (db, title, id) => {
  require('dotenv').config()
  const Twitter = require('twitter')
  const client = new Twitter({
    consumer_key: process.env.TW_CONSUMER_KEY,
    consumer_secret: process.env.TW_CONSUMER_SECRET,
    access_token_key: process.env.TW_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TW_ACCESS_TOKEN_SECRET
  })
  const url = `https://${process.env.FB_PROJECTID}.firebaseapp.com/${id}`
  const tweet = `[auto]firebase functionsからの自動投稿テスト 「${title}」( ${url} )`

  console.log('client.consumer_key: ', client.consumer_key)
  console.log('client.consumer_secret: ', client.consumer_secret)
  console.log('client.access_token_key: ', client.access_token_key)
  console.log('client.access_token_secret: ', client.access_token_secret)

  client.post(
    'statuses/update',
    {
      status: tweet
    },
    (error, tweet, response) => {
      console.log(tweet) // Tweet body.
      console.log(response) // Raw response object.
      if (error) {
        // console.log(error)
        return error
      } else {
        return response
      }
    }
  )
}
