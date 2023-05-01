// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG7wmg5l8_sxwJs3Swr169g8iTBNayVOk",
  authDomain: "shop-it-app-78bc6.firebaseapp.com",
  projectId: "shop-it-app-78bc6",
  storageBucket: "shop-it-app-78bc6.appspot.com",
  messagingSenderId: "656953105452",
  appId: "1:656953105452:web:fbade52c934efc50674589",
  databaseURL:"https://shop-it-app-78bc6-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);