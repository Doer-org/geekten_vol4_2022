import Link from 'next/link';
import { FC } from 'react';
import { useLogOut } from '../../../hooks/User/useLogOut';
import { useUserStore } from '../../../store/store';
interface IProps {
  isShow: boolean;
}
export const LoggedInNavbar: FC<IProps> = ({ isShow }) => {
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
    <ul
      className={
        isShow
          ? 'text-white flex flex-col h-screen items-center justify-center'
          : 'md:flex hidden justify-end'
      }
    >
      <li className="text-lg font-bold py-5 md:py-2 px-3">
        <Link href="/">ホーム</Link>
      </li>
      <li className="text-lg font-bold py-5 md:py-2 px-3">
        <Link href="/favorite">お気に入り</Link>
      </li>
      <button className="text-lg font-bold py-5 md:py-2 px-3" onClick={logOut}>
        ログアウト
      </button>
      <li className="text-lg font-bold py-5 md:py-2 px-3">
        <Link href="/account">アカウント</Link>
      </li>
    </ul>
  );
};
