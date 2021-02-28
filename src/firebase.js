import * as firebase from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJc0EvQtixVoeB1Q1I00Ey4acTkBphfXA",
    authDomain: "tutorial-tweet.firebaseapp.com",
    projectId: "tutorial-tweet",
    storageBucket: "tutorial-tweet.appspot.com",
    messagingSenderId: "455593286823",
    appId: "1:455593286823:web:0ece66ea784cf633728f82"
  };

  // Initialize Firebase
  
  export default firebase.initializeApp(firebaseConfig);