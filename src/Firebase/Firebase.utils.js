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

export const createUser = async (userAuth, data) => {
    if(!userAuth) {
        return
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const {displayName, email} = userAuth
        const created = new Date()
        
        try {
            await userRef.set({
                displayName,
                email,
                created,
                ...data
            })
        } catch (err) {
            console.log(err)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase