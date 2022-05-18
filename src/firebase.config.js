import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtU6MEpzqNigGWkwYg3aPKb2bsRM46POc",
  authDomain: "house-marketpace-app-69f44.firebaseapp.com",
  projectId: "house-marketpace-app-69f44",
  storageBucket: "house-marketpace-app-69f44.appspot.com",
  messagingSenderId: "21030753342",
  appId: "1:21030753342:web:b059ab8392b1bf0c332d6f"
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
