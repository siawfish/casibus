import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXfhMPt8Ch89XFh4MdtTUblRL6bATmLa8",
    authDomain: "codetrain-68b40.firebaseapp.com",
    databaseURL: "https://codetrain-68b40.firebaseio.com",
    projectId: "codetrain-68b40",
    storageBucket: "codetrain-68b40.appspot.com",
    messagingSenderId: "51864833871",
    appId: "1:51864833871:web:0db9d9b7bf14b9a0e8ff3a",
    measurementId: "G-RQLSVVEBVM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase