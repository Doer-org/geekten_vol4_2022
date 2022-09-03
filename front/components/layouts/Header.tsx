import { FC } from 'react';
import Link from 'next/link';

export const Header: FC = () => {
  return (
    <header>
      <div className="grid grid-cols-2 px-10 py-3 ">
        <h1 className="text-5xl font-extrabold">DITA</h1>
        <nav className="flex items-center justify-end">
          <ul className="flex gap-10 justify-end">
            <li className="text-lg font-bold">
              <Link href="/">Home</Link>
            </li>
            <li className="text-lg font-bold">
              <Link href="/favorite">Favorite</Link>
            </li>
            <li className="text-lg font-bold">
              <Link href="/account/login">Login/signup</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
