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
      <li className="text-lg font-bold py-5 md:py-2 px-3">
        <Link href="/">ホーム</Link>
      </li>
      <li className="text-lg font-bold py-5 md:py-2 px-3">
        <Link href="/account/login">ログイン・新規登録</Link>
      </li>
    </ul>
  );
};
