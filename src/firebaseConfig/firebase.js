import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyC6L9XqlveQfTa3LYUn2f-NwP7BgUz69iU",
  authDomain: "shop-commerce-react.firebaseapp.com",
  projectId: "shop-commerce-react",
  storageBucket: "shop-commerce-react.appspot.com",
  messagingSenderId: "660796534064",
  appId: "1:660796534064:web:2510da01d21baddbc4acf5"

};





// Initialize Firebase

export const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);

export default fireDB  ;