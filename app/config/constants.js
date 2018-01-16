import firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCAcZnsoYqYgi0rR7UQ3lzMd23-G1dnmgA",
    authDomain: "tylermcginnis-redux.firebaseapp.com",
    databaseURL: "https://tylermcginnis-redux.firebaseio.com",
    projectId: "tylermcginnis-redux",
    storageBucket: "tylermcginnis-redux.appspot.com",
    messagingSenderId: "250835209521"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const usersDucksExpirationLength = 100000
export const userExpirationLength = 100000

export const repliesExpirationLength = 300000
