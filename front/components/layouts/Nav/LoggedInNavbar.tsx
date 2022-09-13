import Link from 'next/link';
import { FC } from 'react';
import { UserInfo } from '../../../types/userInfo';
import { useLogOut } from '../../../hooks/useLogOut';
import { useUserStore } from '../../../store/store';
export const LoggedInNavbar: FC<{ user: UserInfo }> = ({ user }) => {
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
    <div>
      <li className="text-lg font-bold py-5">
        <Link href="/">ホーム</Link>
      </li>
      <li className="text-lg font-bold py-5">
        <Link href="/favorite">お気に入り</Link>
      </li>
      {user.id == '' ? (
        <li className="text-lg font-bold py-5">
          <Link href="/account/login">ログイン・新規登録</Link>
        </li>
      ) : (
        <div>
          <button className="text-lg font-bold py-5" onClick={() => logOut()}>
            ログアウト
          </button>
          <li className="text-lg font-bold py-5">
            <Link href="/account">アカウント</Link>
          </li>
        </div>
      )}
    </div>
  );
};
