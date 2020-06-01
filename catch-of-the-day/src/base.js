import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export 
export {firebaseApp};

// this is a default export

export default base;