import { initializeApp, FirebaseApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export let app: FirebaseApp;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA-o9bMsPo39dCsojk4SJtI2ePPGAAD3k",
  authDomain: "fastcampus-react-witter.firebaseapp.com",
  projectId: "fastcampus-react-witter",
  storageBucket: "fastcampus-react-witter.appspot.com",
  messagingSenderId: "698259006532",
  appId: "1:698259006532:web:bae139e81190b04df1c811",
};

try {
  app = getApp("app");
} catch (e) {
  app = initializeApp(firebaseConfig, "app");
}

const firebase = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

export default firebase;
