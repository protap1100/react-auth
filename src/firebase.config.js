// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3uUCt9Ed1T8UBX3E712vaRssrPBly7Go",
  authDomain: "react-auth-91fd7.firebaseapp.com",
  projectId: "react-auth-91fd7",
  storageBucket: "react-auth-91fd7.appspot.com",
  messagingSenderId: "40649921722",
  appId: "1:40649921722:web:862ad5ca925b6e30f45e83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export default auth;
// export default app;
