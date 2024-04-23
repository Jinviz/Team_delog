import { initializeApp, FirebaseApp, getApp } from "firebase/app";
import "firebase/auth";

export let app: FirebaseApp; //지역변수로 할당

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENTER_ID,
  appId: process.env.REACT_APP_ID,
};

try {
  app = getApp("app");
} catch (e) {
  app = initializeApp(firebaseConfig, "app");
} //기존의 앱을 가져오고, 그게 아니라면 초기화 된 앱을 가져오라는 뜻
//매번 initialize를 하면 비효율적이기 때문이다.

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;