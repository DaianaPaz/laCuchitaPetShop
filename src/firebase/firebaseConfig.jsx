import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD5w7S0UYzMlQd7BdIUSriKUXN5rFOZnqU",
    authDomain: "lacuchitapetshop.firebaseapp.com",
    projectId: "tienda de mascotas lacuchita",
    storageBucket: "lacuchitapetshop.appspot.com",
    messagingSenderId: "264760089368",
    appId: "1:264760089368:web:c8f64efb2d6546f5539c6d",
    measurementId: "G-V451TXRF41"
};

const app=initializeApp(firebaseConfig);
export const db = getFirestore(app)