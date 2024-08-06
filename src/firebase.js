import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD3uBGZKPX66VbXqgqSnPeb8tbAVy9ovhs",
    authDomain: "heritagehue-77af2.firebaseapp.com",
    projectId: "heritagehue-77af2",
    storageBucket: "heritagehue-77af2.appspot.com",
    messagingSenderId: "235888662854",
    appId: "1:235888662854:web:5bae74a690e59e59a66d47"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
