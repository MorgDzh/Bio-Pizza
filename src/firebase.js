import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtZq_Rg-BXO7CRgy7wXG7r-e6sJ7x1eso",
  authDomain: "bio-pizza-d321d.firebaseapp.com",
  projectId: "bio-pizza-d321d",
  storageBucket: "bio-pizza-d321d.appspot.com",
  messagingSenderId: "1043165726145",
  appId: "1:1043165726145:web:83dc9d84b14430429c1b40"
}; 

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
