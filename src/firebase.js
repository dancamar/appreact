import firebase from 'firebase/app';
import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyBW1FHPtBZxUd9kKChQatV_sYjB65-0oUQ",
    authDomain: "apppruebar.firebaseapp.com",
    databaseURL: "https://apppruebar.firebaseio.com",
    projectId: "apppruebar",
    storageBucket: "apppruebar.appspot.com",
    messagingSenderId: "906429860225",
    appId: "1:906429860225:web:851a9ff146ee5aeccd8080"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db =fb.firestore();

 