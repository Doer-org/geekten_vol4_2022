import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeFirebase } from '../../utils/firebase';
import { UserInfo } from '../../types/userInfo';
import { FetchUser } from '../../services/User/FetchUser';
type CurrentUser = (setUser: (user: UserInfo) => void) => void;
export const useFetchCurrentUser: CurrentUser = async (setUser) => {
  initializeFirebase();
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user !== null && user.displayName !== null) {
      setUser({ id: user.uid, name: user.displayName });
      FetchUser(user.uid);
    }
  });
};
