import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCoAj1C-a6u7UGb7YdAPu1dMTkRV_PuodM",
    authDomain: "hero-board.firebaseapp.com",
    databaseURL: "https://hero-board.firebaseio.com",
    projectId: "hero-board",
    storageBucket: "",
    messagingSenderId: "825096580232",
    appId: "1:825096580232:web:89535033383ff3d974433d",
    measurementId: "G-N96RBP5NLX"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;