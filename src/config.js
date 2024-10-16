import firebase from 'firebase'
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBX-E0n7XeMvOHlmfnPeRNnzp5UHSdegms",
  authDomain: "fitness-878d6.firebaseapp.com",
  projectId: "fitness-878d6",
  storageBucket: "fitness-878d6.appspot.com",
  messagingSenderId: "162878594935",
  appId: "1:162878594935:web:f442c225905bc6ed974b72"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  const auth = firebase.auth();

  export const storage  = firebase.storage();

  export {auth, database};
