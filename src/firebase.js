// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDHhGuvx4eYy-_hA1RrEhEHgablBrMyCeY',
  authDomain: 'nannyservices-65d0d.firebaseapp.com',
  projectId: 'nannyservices-65d0d',
  storageBucket: 'nannyservices-65d0d.appspot.com',
  messagingSenderId: '715704274323',
  appId: '1:715704274323:web:5fbe42f5d1bccb65e52c66',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
