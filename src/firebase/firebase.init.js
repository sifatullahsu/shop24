import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCPIDI8TXmAojyZicMdb9X4BJhnMQOzBsc",
  authDomain: "netlify-project-4c42c.firebaseapp.com",
  projectId: "netlify-project-4c42c",
  storageBucket: "netlify-project-4c42c.appspot.com",
  messagingSenderId: "607955067160",
  appId: "1:607955067160:web:4c3c620f2c40d21ae37e6d"
};


const app = initializeApp(firebaseConfig);

export default app;