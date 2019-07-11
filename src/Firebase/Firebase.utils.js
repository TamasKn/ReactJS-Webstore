import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import envs from './.keys.js'

const config = {
    apiKey: envs.FIREBASE_API,
    authDomain: envs.AUTH_DOMAIN,
    databaseURL: envs.DB_URL,
    projectId: envs.PROJECT_ID,
    storageBucket: "",
    messagingSenderId: envs.SENDER_ID,
    appId: envs.APP_ID
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase