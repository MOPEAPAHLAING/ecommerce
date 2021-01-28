import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDL2AwSzg797oHekAKQZ2DGtFYRivE2IOw",
    authDomain: "practiceonexx-83b62.firebaseapp.com",
    projectId: "practiceonexx-83b62",
    storageBucket: "practiceonexx-83b62.appspot.com",
    messagingSenderId: "432869403326",
    appId: "1:432869403326:web:4875ad1b505270c4c80cef",
    measurementId: "G-2WC517G1PS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //export
  export const auth = firebase.auth()
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();