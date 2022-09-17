import Link from 'next/link';
import Router from 'next/router';
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
        Router.push('/')
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
        <Link href="/">HOME</Link>
      </li>
      <li className="text-lg font-bold py-5 md:py-2 px-3 z-50">
        <Link href="/about">ABOUT</Link>
      </li>
      <li className="text-lg font-bold py-5 md:py-2 px-3">
        <Link href="/favorite">FAVORITE</Link>
      </li>
      <li className="text-lg font-bold py-5 md:py-2 px-3">
        <Link href="/account">ACCOUNT</Link>
      </li>
      <button className="text-lg font-bold py-5 md:py-2 px-3" onClick={logOut}>
        LOGOUT
      </button>
    </ul>
  );
};
