
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyBi8QFlAX5QlnFnsvBbfOT68ygidSTRrpQ",
  authDomain: "twitter---a2.firebaseapp.com",
  databaseURL: "https://console.firebase.google.com/project/twitter---a2/firestore/data~2F",
  projectId: "twitter---a2",
  storageBucket: "twitter---a2.appspot.com",
  messagingSenderId: "585943474577",
  appId: "1:585943474577:web:e030671a3af590891dba30",
  measurementId: "G-37RWFR8EK8"
};

  const  firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  export default db;
  export {provider , auth}