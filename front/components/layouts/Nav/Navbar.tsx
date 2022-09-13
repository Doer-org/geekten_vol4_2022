import Link from 'next/link';
import { FC } from 'react';
export const Navbar: FC<{ show: boolean }> = ({ show }) => {
  return (
    <ul
      className={
        show
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
