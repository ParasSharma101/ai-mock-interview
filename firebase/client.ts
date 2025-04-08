// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_lCL_wudRPARWqF84kWAxZw3vNrfHrY8",
  authDomain: "wiseprep-5023c.firebaseapp.com",
  projectId: "wiseprep-5023c",
  storageBucket: "wiseprep-5023c.firebasestorage.app",
  messagingSenderId: "1034532359140",
  appId: "1:1034532359140:web:c3535dbadac12ddf0b55f1",
  measurementId: "G-C9H8JME0CX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);