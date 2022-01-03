import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDGVvAWM08uCbKfGPdCUfIq4XFARm-J4f0",
    authDomain: "clone-d07a4.firebaseapp.com",
    projectId: "clone-d07a4",
    storageBucket: "clone-d07a4.appspot.com",
    messagingSenderId: "971339154887",
    appId: "1:971339154887:web:304de7f3e8fa1ac87485e2"
  }; 
   
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  
  const db=firebaseApp.firestore();
   const auth=firebase.auth();
  
   export {db,auth};