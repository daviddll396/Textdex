import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDv8QurzSgHQowVeynUlG-BEgSt4VS2jWY",
    authDomain: "textdex-26d79.firebaseapp.com",
    projectId: "textdex-26d79",
    storageBucket: "textdex-26d79.appspot.com",
    messagingSenderId: "480015238304",
    appId: "1:480015238304:web:6795976246cacd2e9ff5c5"
  }).auth();