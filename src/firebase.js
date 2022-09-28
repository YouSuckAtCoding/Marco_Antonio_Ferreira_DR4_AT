import firebase from "firebase/app";
import "firebase/database";

// modificar de acordo com firebase
let  firebaseConfig = {
  apiKey: "AIzaSyBv4DoF6gjbNllJLmxSfE1jB5pIVfogcjY",
  authDomain: "at-marco-antonio.firebaseapp.com",
  projectId: "at-marco-antonio",
  storageBucket: "at-marco-antonio.appspot.com",
  messagingSenderId: "999546256349",
  appId: "1:999546256349:web:6e380c3d92186dff8c9434"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();

