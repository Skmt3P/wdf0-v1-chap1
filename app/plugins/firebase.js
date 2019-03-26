import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAcwRZg-BkmnhjN6vCjE3BUppk4CvbqiiI',
  authDomain: 'oi-machi-saga.firebaseapp.com',
  databaseURL: 'https://oi-machi-saga.firebaseio.com',
  projectId: 'oi-machi-saga',
  storageBucket: 'oi-machi-saga.appspot.com',
  messagingSenderId: '956235970515'
  // apiKey: String(process.env.FB_API_KEY),
  // authDomain: String(process.env.FB_AUTH_DOMAIN),
  // databaseURL: String(process.env.FB_DATABASE_URL),
  // projectId: String(process.env.FB_PROJECTID),
  // storageBucket: String(process.env.FB_STORAGE_BUCKET),
  // messagingSenderId: String(process.env.FB_MESSAGING_SENDER_ID)
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
console.log(firebase.apps)

export default firebase
