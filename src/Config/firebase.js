import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAyl4F00hga6Vd8cWdTn3rkPNCOHd8IEtA",
    authDomain: "munich-1dd9f.firebaseapp.com",
    projectId: "munich-1dd9f",
    storageBucket: "munich-1dd9f.appspot.com",
    messagingSenderId: "6382860456",
    appId: "1:6382860456:web:bdd8679ea9439a43926a9d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.db = firebase.firestore()
firebase.auth = firebase.auth()
export default firebase