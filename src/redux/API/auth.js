import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../../firebase.js';

export const signUp = async ({ email, password, displayName }) => {
  return createUserWithEmailAndPassword(auth, email, password, displayName)
    .then(userCredential => {
      const user = userCredential.user;
      return JSON.parse(JSON.stringify(user));
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const signIn = async ({ email, password }) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      return JSON.parse(JSON.stringify(user));
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
};

export const logOut = async () => {
  return signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      console.log(error);
      // An error happened.
    });
};
