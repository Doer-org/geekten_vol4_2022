import { getAuth, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeFirebase } from '../utils/firebase';
import { UserInfo } from '../types/userInfo';
export const useLogin = async (): Promise<UserInfo> => {
  console.log('github login');
  initializeFirebase();
  const auth = getAuth();
  const provider = new GithubAuthProvider();
  const cred = await signInWithPopup(auth, provider);
  return {
    id: cred.user.uid,
    name: cred.user.displayName ? cred.user.displayName : '',
  };
};
