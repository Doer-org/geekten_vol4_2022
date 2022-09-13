import Link from 'next/link';
import { FC } from 'react';
import { UserInfo } from '../../../types/userInfo';
import { useLogOut } from '../../../hooks/useLogOut';
import { useUserStore } from '../../../store/store';
export const Navbar: FC<{ user: UserInfo; className: string }> = ({
  user,
  className,
}) => {
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
    <ul className={className}>
      <li className="text-lg font-bold py-5 md:py-2 px-3">
        <Link href="/">ホーム</Link>
      </li>
      <li className="text-lg font-bold py-5 md:py-2 px-3">
        <Link href="/favorite">お気に入り</Link>
      </li>
      {user.id == '' ? (
        <li className="text-lg font-bold py-5 md:py-2 px-3">
          <Link href="/account/login">ログイン・新規登録</Link>
        </li>
      ) : (
        <div className="md:flex">
          <button
            className="text-lg font-bold py-5 md:py-2 px-3"
            onClick={() => logOut()}
          >
            ログアウト
          </button>
          <li className="text-lg font-bold py-5 md:py-2 px-3">
            <Link href="/account">アカウント</Link>
          </li>
        </div>
      )}
    </ul>
  );
};
