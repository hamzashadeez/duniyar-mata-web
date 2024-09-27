// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGjdfyPBrsRBL2ZoTMRIAt_edl0qHubbU",
  authDomain: "duniyar-mata-d3ab9.firebaseapp.com",
  projectId: "duniyar-mata-d3ab9",
  storageBucket: "duniyar-mata-d3ab9.appspot.com",
  messagingSenderId: "999739077965",
  appId: "1:999739077965:web:959c1d525ac9126214b304",
  measurementId: "G-ZFDVCXNKWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {
    db
}