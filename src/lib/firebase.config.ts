// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDzdr63XtRmKlvE_B0Nykbqok975200gog",
  authDomain: "jb-agendamento.firebaseapp.com",
  projectId: "jb-agendamento",
  storageBucket: "jb-agendamento.firebasestorage.app",
  messagingSenderId: "297051827907",
  appId: "1:297051827907:web:39adce3655300173c67c76",
  measurementId: "G-PTCGQTT4D7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize Firebase Authentication and get a reference to the service
export { auth };
