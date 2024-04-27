import { initializeApp, FirebaseApp, getApp } from "firebase/app";
import "firebase/auth";
import {getFirestore} from "firebase/firestore";

export let app: FirebaseApp; // 지역 변수 할당

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENTER_ID,
  appId: process.env.REACT_APP_ID
};

try{
  app = getApp("app") // 초기화가 되지 않았으면 다시 초기화를 진행함.
} catch(e) {
    app = initializeApp(firebaseConfig, "app"); // 앱이 초기화가 되었다면 가져옴.
  }

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Intiallize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default firebase;