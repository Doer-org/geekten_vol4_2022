import Link from 'next/link';
import { FC } from 'react';
interface IProps {
  isShow: boolean;
}
export const Navbar: FC<IProps> = ({ isShow }) => {
  return (
    <ul
      className={
        isShow
          ? 'text-white flex flex-col h-screen items-center justify-center'
          : 'md:flex hidden justify-end'
      }
    >
      <li className="text-lg font-bold py-5 md:py-2 px-3 z-50">
        <Link href="/">HOME</Link>
      </li>
      <li className="text-lg font-bold py-5 md:py-2 px-3 z-50">
        <Link href="/about">ABOUT</Link>
      </li>
      <li className="text-lg font-bold py-5 md:py-2 px-3 z-50">
        <Link href="/account/login">LOGIN・SIGNUP</Link>
      </li>
    </ul>
  );
};
