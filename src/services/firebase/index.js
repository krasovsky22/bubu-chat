import * as firebase from 'firebase'
import { firebaseConfig } from './config'

export function connect() {
    console.log('connecting');
    firebase.initializeApp(firebaseConfig);
}

export function onLoginEvent(callback) {
    return firebase.auth().onAuthStateChanged(callback);
}