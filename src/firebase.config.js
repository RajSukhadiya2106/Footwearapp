import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCOnET6RB5TInhvF9SHd7v2WYFQH3lc5bc",
    authDomain: "footwear-app-23c23.firebaseapp.com",
    databaseURL: "https://footwear-app-23c23-default-rtdb.firebaseio.com",
    projectId: "footwear-app-23c23",
    storageBucket: "footwear-app-23c23.appspot.com",
    messagingSenderId: "1023574871245",
    appId: "1:1023574871245:web:fa43faf48f376281356d84"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };