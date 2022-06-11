import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "@firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDjCy9NXIDR9FKl1hQEw7nsaE1F0X2AByE",
    authDomain: "aloha-83caa.firebaseapp.com",
    projectId: "aloha-83caa",
    storageBucket: "aloha-83caa.appspot.com",
    messagingSenderId: "503740089822",
    appId: "1:503740089822:web:07316b198cf8e5f139094f",
    measurementId: "G-7EC546HN5J"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
