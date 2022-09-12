import Link from 'next/link';
import { useLogOut } from '../../hooks/useLogOut';
import { useUserStore } from '../../store/store';
export const HomeEl = () => {
  return (
    <li className="text-lg font-bold py-5">
      <Link href="/">ホーム</Link>
    </li>
  );
};

export const FavEl = () => {
  return (
    <li className="text-lg font-bold py-5">
      <Link href="/favorite">お気に入り</Link>
    </li>
  );
};

export const LoginEl = () => {
  return (
    <li className="text-lg font-bold py-5">
      <Link href="/account/login">ログイン・新規登録</Link>
    </li>
  );
};

export const AccountEl = () => {
  return (
    <li className="text-lg font-bold py-5">
      <Link href="/account">アカウント</Link>
    </li>
  );
};

export const LogoutEl = () => {
  const resetUser = useUserStore((state) => state.resetUser);
  const logOut = () => {
    useLogOut()
      .then((res) => {
        resetUser();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <button className="text-lg font-bold py-5" onClick={() => logOut()}>
      ログアウト
    </button>
  );
};
