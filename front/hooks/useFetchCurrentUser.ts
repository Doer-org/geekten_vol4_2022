import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { initializeFirebase } from '../utils/firebase';
// import { UserInfo } from '../types/userInfo';

// type CurrentUser = (setUser: (user: UserInfo) => void) => void;

// export const useFetchCurrentUser: CurrentUser = (setUser) => {
//   initializeFirebase();
//   const auth = getAuth();
//   onAuthStateChanged(auth, (user) => {
//     console.log(user);
//     if (user === null) {
//       throw Error('ユーザーの情報が取得できませんでした');
//     }
//     if (user.displayName === null) {
//       throw Error('ユーザー名が取得できませんでした');
//     }
//     console.log('２回目のユーザー取得');
//     console.log(user);
//     setUser({ id: user.uid, name: user.displayName });
//   });
// };
