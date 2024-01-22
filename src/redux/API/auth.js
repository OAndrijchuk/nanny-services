import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth, db } from '../../firebase.js';
import { collection, doc, setDoc } from 'firebase/firestore';
import { getFavorite } from './nannies.js';

export const signUp = async ({ email, password, displayName }) => {
  return createUserWithEmailAndPassword(
    auth,
    email,
    password,
    displayName
  ).then(async userCredential => {
    const data = userCredential.user;
    const user = JSON.parse(JSON.stringify(data));
    const userRef = collection(db, 'users');
    await setDoc(doc(userRef, user.uid), {
      favorites: [],
    });

    const favorites = await getFavorite(user.uid);
    return { favorites, user };
  });
};

export const signIn = async ({ email, password }) => {
  return signInWithEmailAndPassword(auth, email, password).then(
    async userCredential => {
      const data = userCredential.user;
      const user = JSON.parse(JSON.stringify(data));
      const favorites = await getFavorite(user.uid);
      return { favorites, user };
    }
  );
};

export const logOut = async () => {
  return signOut(auth).then(() => {
    // Sign-out successful.
  });
};
