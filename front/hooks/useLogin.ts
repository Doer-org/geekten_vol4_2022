import { getAuth, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeFirebase } from '../utils/firebase';
import { CreateUser } from '../services/User/CreateUser';
import { UserInfo } from '../types/userInfo';
export const useLogin = async (): Promise<UserInfo> => {
  console.log('github login');
  initializeFirebase();
  const auth = getAuth();
  const provider = new GithubAuthProvider();
  const cred = await signInWithPopup(auth, provider);
  // データベースに保存するかしないかの条件分岐どうする？？？
  // データベースにユーザーIDが保存されていたらcreate処理は行わない
  // そのために特定のユーザーIDがデータベースに保存されているか確かめるAPIが必要
  CreateUser({
    id: cred.user.uid,
    name: cred.user.displayName ? cred.user.displayName : 'NoName',
  });
  return {
    id: cred.user.uid,
    name: cred.user.displayName ? cred.user.displayName : '',
  };
};
