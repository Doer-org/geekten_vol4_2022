import { getAuth, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeFirebase } from '../utils/firebase';
import { CreateUser } from '../services/User/CreateUser';
import { FetchUser } from '../services/User/FetchUser';
import { UserInfo } from '../types/userInfo';
import Router from 'next/router';

export const useLogin = async (): Promise<UserInfo> => {
  initializeFirebase();
  const auth = getAuth();
  const provider = new GithubAuthProvider();
  const cred = await signInWithPopup(auth, provider);
  const userData = {
    id: cred.user.uid,
    name: cred.user.displayName ? cred.user.displayName : 'NoName',
  };
  // 本当はFetchUserの返ってきた値が正常系じゃないときのみcreateUserをするようにしたい
  CreateUser(userData);
  const user = FetchUser(userData.id);
  // ここでローカルストレージに入れる
  localStorage.setItem('user', JSON.stringify(userData));
  Router.push('/')
  return user;
};
