import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBiEc76qUfScCIJjdG-dfaXKDtdaiaPYXs",
    authDomain: "catch-of-the-day-andrew-3c744.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-andrew-3c744.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export 
export {firebaseApp};

// this is a default export

export default base;