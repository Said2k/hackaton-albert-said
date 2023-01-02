import firebase from "firebase/compat/app"
import 'firebase/compat/app'
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDEhsECzGoCVWP_xMYNBr5VlRgq4ZvY5MM",
    authDomain: "hackaton-with-albert.firebaseapp.com",
    projectId: "hackaton-with-albert",
    storageBucket: "hackaton-with-albert.appspot.com",
    messagingSenderId: "346638918476",
    appId: "1:346638918476:web:62e81823e62a5b4dcba5e9",
    measurementId: "G-7YV2QTRR6S"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire