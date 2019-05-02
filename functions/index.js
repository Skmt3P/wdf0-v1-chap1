const admin = require('firebase-admin')
const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
const express = require('express')
const rss = require('./rss.js')
const app = express()

const config = {
  dev: false,
  buildDir: '.nuxt',
  build: {
    publicPath: '/assets/'
  }
}
const nuxt = new Nuxt(config)

function handleRequest(req, res) {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, promise => {
      promise.then(resolve).catch(reject)
    })
  })
}

app.use(handleRequest)
// Nuxt本体をSSRとしてDeploy
exports.ssr = functions.https.onRequest(app)

// RSS取得Function
exports.setRss = functions.https.onRequest((req, res) => {
  console.log('Set RSS in Cloud Firestore')
  if (!admin.apps.length) {
    admin.initializeApp({})
  }
  const db = admin.firestore()
  rss.fetchRss(db, req, res)
})
