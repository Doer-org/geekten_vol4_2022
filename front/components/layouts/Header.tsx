import { FC, useState } from 'react';
import Link from 'next/link';
import style from '../../styles/navbar.module.css';

export const Header: FC = () => {
  const [nav, setNav] = useState(false);
  return (
    <header>
      <div className="grid grid-cols-2 sm:px-10 px-3 py-3 ">
        <h1 className="text-5xl font-extrabold">DITA</h1>
        <nav className="flex items-center justify-end">
          <div className="md:hidden z-30" onClick={() => setNav(!nav)}>
            <div className={style.burgers}>
              <span className={nav ? style.child1Open : style.child1}></span>
              <span className={nav ? style.child2Open : style.child2}></span>
              <span className={nav ? style.child3Open : style.child3}></span>
            </div>
          </div>
          <div>
            {nav ? (
              <div className={style.all}>
                <ul className="md:flex gap-10 justify-center p-10 shadow-lg rounded-md border w-screen h-screen text-center pt-10">
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
              </div>
            ) : (
              <ul className="md:flex hidden gap-10 justify-end">
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
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
