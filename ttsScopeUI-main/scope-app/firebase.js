// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA0n57ROf-FiFRGLc625hdbxyynWKWfPc",
  authDomain: "scope-app-645f6.firebaseapp.com",
  projectId: "scope-app-645f6",
  storageBucket: "scope-app-645f6.appspot.com",
  messagingSenderId: "760983518638",
  appId: "1:760983518638:web:1a5b12e208b8b36fc49c3f",
};

// Initialize Firebase
let app;
if(firebase.apps.length=== 0 ){
    app= firebase.initializeApp(firebaseConfig);
} else {
    app=firebase.app()
}
const auth = firebase.auth();
const firestore = firebase.firestore;
const db = firebase.firestore();
export { auth, firestore ,db};
