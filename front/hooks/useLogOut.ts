import { getAuth, signOut } from 'firebase/auth';
import { initializeFirebase } from '../utils/firebase';
export const useLogOut = (): Promise<void> => {
  initializeFirebase();
  const auth = getAuth();
  return signOut(auth);
};
