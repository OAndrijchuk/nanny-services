import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

export const getNannies = async () => {
  const querySnapshot = await getDocs(collection(db, 'nannies'));
  const arr = [];
  querySnapshot.forEach(doc => {
    arr.push(doc.data());
  });
  return arr;
};
