import { getAuth, signOut } from 'firebase/auth';
import { initializeFirebase } from '../utils/firebase';
type LogOut = (id: string, resetId: (id: string) => void) => void;
export const useLogOut: LogOut = (id, resetId) => {
  initializeFirebase();
  const auth = getAuth();
  console.log(auth);
  signOut(auth)
    .then((res) => {
      resetId(id);
    })
    .catch((error) => {
      console.log(error);
    });
};
