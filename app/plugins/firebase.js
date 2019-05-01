import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: String(process.env.FB_API_KEY),
  authDomain: String(process.env.FB_AUTH_DOMAIN),
  databaseURL: String(process.env.FB_DATABASE_URL),
  projectId: String(process.env.FB_PROJECTID),
  storageBucket: String(process.env.FB_STORAGE_BUCKET),
  messagingSenderId: String(process.env.FB_MESSAGING_SENDER_ID)
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
