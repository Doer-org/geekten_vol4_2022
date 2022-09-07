import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  getRedirectResult,
} from 'firebase/auth';
import { initializeFirebase } from '../utils/firebase';
import { useFetchCurrentUser } from './useFetchCurrentUser';
type LogIn = (id: string, setId: (id: string) => void) => void;
export const useLogin: LogIn = async (id, setId) => {
  console.log('github login');
  console.log(id);
  if (id == '') {
    initializeFirebase();
    const auth = getAuth();
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GithubAuthProvider.credentialFromError(error);
      });
    const result = await getRedirectResult(auth);
    useFetchCurrentUser(setId);
  } else {
    alert('ログイン済みです');
  }
};
