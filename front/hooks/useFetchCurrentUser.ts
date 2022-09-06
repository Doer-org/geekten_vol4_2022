import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeFirebase } from '../utils/firebase';
type CurrentUser = (setId: (id: string) => void) => void;
export const useFetchCurrentUser: CurrentUser = (setId) => {
  initializeFirebase();
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user == null) {
      return null;
    }
    setId(user.uid);
  });
};
