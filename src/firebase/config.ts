import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD42qiaf93EMezVipnaMkwddG0ZH1aBNaM",
  authDomain: "gilbert-ea03b.firebaseapp.com",
  projectId: "gilbert-ea03b",
  storageBucket: "gilbert-ea03b.appspot.com",
  messagingSenderId: "616337740228",
  appId: "1:616337740228:web:ba4367943472d657a69491",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
