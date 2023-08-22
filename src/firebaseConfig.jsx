import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBZrTkmjNVRioHt31GqMzFmKG_5iJ0nei4",
  authDomain: "reat-coder.firebaseapp.com",
  projectId: "reat-coder",
  storageBucket: "reat-coder.appspot.com",
  messagingSenderId: "958064110499",
  appId: "1:958064110499:web:5b997a9a39a36905994816"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)