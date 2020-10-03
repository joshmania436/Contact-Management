import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDJs2MVSXkeZTs5CZCVMV5eA2F6wHX67wo",
    authDomain: "contact-management-1c24c.firebaseapp.com",
    databaseURL: "https://contact-management-1c24c.firebaseio.com",
    projectId: "contact-management-1c24c",
    storageBucket: "contact-management-1c24c.appspot.com",
    messagingSenderId: "841423039647",
    appId: "1:841423039647:web:ce1854c6ccabd1ee5d46aa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()
  