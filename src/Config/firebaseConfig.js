// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtVN8yqqYTaihxCppFnl_59QrrARsBrbA",
  authDomain: "task-with-reactjs.firebaseapp.com",
  projectId: "task-with-reactjs",
  storageBucket: "task-with-reactjs.appspot.com",
  messagingSenderId: "496161782843",
  appId: "1:496161782843:web:94831350459f3f62a5701e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;