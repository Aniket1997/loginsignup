// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOT0y3CAwOLKOitwVGMMKdbaSS8na332M",
  authDomain: "shoppingapp-ce43b.firebaseapp.com",
  databaseURL: "https://shoppingapp-ce43b-default-rtdb.firebaseio.com",
  projectId: "shoppingapp-ce43b",
  storageBucket: "shoppingapp-ce43b.appspot.com",
  messagingSenderId: "445114495202",
  appId: "1:445114495202:web:c22f820ad90100564feebb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}