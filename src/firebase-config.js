import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import {
  getAuth, 
  GoogleAuthProvider, 
  FacebookAuthProvider, 
  signInWithPopup, 
  signOut
} 
from "firebase/auth"

const firebaseConfig = {
  apiKey : "AIzaSyB5xNU5Iq2sdq2o_CjBSsCNUVoDykkhmqI" , 
  authDomain : "product-ae915.firebaseapp.com" , 
  projectId : "product-ae915" , 
  storageBucket : "product-ae915.appspot.com" , 
  messagingSenderId : "564592443108" , 
  appId : "1:564592443108:web:0aa02fc56a26d77ed0f6f1" , 
  measurementId : "G-THR11F2TXC" 
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
const providerGoogle = new GoogleAuthProvider()
const providerFacebook = new FacebookAuthProvider();
export const signInWithGoogle = async() => {
  await signInWithPopup(auth, providerGoogle)
  window.location.reload()

}

export const signInWithFacebook = async() => {
  await signInWithPopup(auth, providerFacebook)

}


export const signOutUser = () => {
  signOut(auth)
  window.location.reload()
}
