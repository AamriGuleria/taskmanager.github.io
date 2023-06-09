import { initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth"
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyB78nD-6OdOdB8oo5Spge_SKBgPHK_xk-w",
    authDomain: "user-auth-e177c.firebaseapp.com",
    projectId: "user-auth-e177c",
    storageBucket: "user-auth-e177c.appspot.com",
    messagingSenderId: "761019447375",
    appId: "1:761019447375:web:597cf2f3089addc2b1d23a",
    measurementId: "G-BKH5TFNSJM"
}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export {auth}