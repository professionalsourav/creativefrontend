// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2w2ipKAbL-Gvsplw0zxfbi5lyoumNnw0",
  authDomain: "centumworld-55ded.firebaseapp.com",
  projectId: "centumworld-55ded",
  storageBucket: "centumworld-55ded.appspot.com",
  messagingSenderId: "899936181533",
  appId: "1:899936181533:web:0cbc0fc0577116c4f715f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const db = getFirestore(app);



export default app;