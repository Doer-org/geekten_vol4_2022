import { getAuth, signOut } from 'firebase/auth';
import { initializeFirebase } from '../../utils/firebase';
import Router from 'next/router';
export const useLogOut = (): Promise<void> => {
  initializeFirebase();
  const auth = getAuth();
  localStorage.removeItem('user');
  Router.push('/')
  return signOut(auth);
};
