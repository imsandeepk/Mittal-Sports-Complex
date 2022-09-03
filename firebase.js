// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvE58AbUoQVrVo1om3NHGVZDVXRALZexQ",
  authDomain: "mittal-ba594.firebaseapp.com",
  projectId: "mittal-ba594",
  storageBucket: "mittal-ba594.appspot.com",
  messagingSenderId: "595830947902",
  appId: "1:595830947902:web:a0320cb5152a536e36116f"
};

// Initialize Firebase
let app;
if(firebase.apps.length ===0){
    app = firebase.initializeApp(firebaseConfig);
    
}
else {
    app =firebase.app()
}
const auth = firebase.auth()

export {auth,app};

