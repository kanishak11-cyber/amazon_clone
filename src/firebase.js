

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAiSmVujw9ZINGAVrsocdmnQ5v9FIWMN74",
  authDomain: "clone-3d278.firebaseapp.com",
  projectId: "clone-3d278",
  storageBucket: "clone-3d278.appspot.com",
  messagingSenderId: "974311101200",
  appId: "1:974311101200:web:5fee8306c4760964ef4b95",
  measurementId: "G-PL9L4CEKZ7"
};
  //write these line
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};