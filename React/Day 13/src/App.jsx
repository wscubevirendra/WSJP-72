import React from 'react'
import Form from './Form'
import Listing from './Listing'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZMBwBSOCGQ6SWTF8B5MVN7VnsSC5KEnk",
  authDomain: "wsjp72.firebaseapp.com",
  projectId: "wsjp72",
  storageBucket: "wsjp72.firebasestorage.app",
  messagingSenderId: "727814567765",
  appId: "1:727814567765:web:222ba1d05682a37f01e1dc",
  measurementId: "G-MBSBY49JFT"
};
// Initialize Firebase
const FireBaseapp = initializeApp(firebaseConfig);

export default function App() {
  return (
    <div className='grid grid-cols-5 gap-6'>
      <Form />
      <Listing />
    </div>
  )
}
