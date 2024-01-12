import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';

export const getNannies = async () => {
  const querySnapshot = await getDocs(collection(db, 'nannies'));
  const arr = [];
  querySnapshot.forEach(doc => {
    arr.push(doc.data());
  });
  return arr;
};

export const getFavorite = async userId => {
  const Ref = doc(db, 'users', userId);
  const data = await getDoc(Ref);
  const { favorites } = data.data();
  return favorites;
};

export const addToFavorite = async ({ userId, nanny }) => {
  const Ref = doc(db, 'users', userId);
  const arr = await updateDoc(Ref, {
    favorites: arrayUnion(nanny),
  });
  return arr;
};

export const removeFromFavorite = async ({ userId, nanny }) => {
  const Ref = doc(db, 'users', userId);
  const arr = await updateDoc(Ref, {
    favorites: arrayRemove(nanny),
  });
  return arr;
};
