import { FC, useState } from 'react';
import Link from 'next/link';
import style from '../../styles/navbar.module.css';
import { useStore } from '../../store/store';
import { useNavStore } from '../../store/store';
import { useLogOut } from '../../hooks/useLogOut';
export const Header: FC = () => {
  const { id } = useStore();
  const { show } = useNavStore();
  const toggle = useNavStore((show) => show.toggle);
  const resetId = useStore((state) => state.resetId);
  return (
    <header className="fixed w-screen backdrop-blur-2xl">
      <div className="grid grid-cols-2 sm:px-10 px-3 py-3">
        <h1 className="text-5xl font-extrabold">DITA</h1>
        <nav className="flex items-center justify-end">
          <button className="md:hidden z-30" onClick={() => toggle(show)}>
            <div className={style.burgers}>
              <span className={show ? style.child1Open : style.child1}></span>
              <span className={show ? style.child2Open : style.child2}></span>
              <span className={show ? style.child3Open : style.child3}></span>
            </div>
          </button>
          <div>
            {show ? (
              <ul className={show ? style.all : undefined}>
                <div className=" text-white flex flex-col h-screen items-center justify-center">
                  <li className="text-lg font-bold py-5">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="text-lg font-bold py-5">
                    <Link href="/favorite">Favorite</Link>
                  </li>
                  {id == '' ? (
                    <li className="text-lg font-bold py-5">
                      <Link href="/account/login">Login/signup</Link>
                    </li>
                  ) : (
                    <button
                      className="text-lg font-bold py-5"
                      onClick={() => {
                        useLogOut(id, resetId);
                      }}
                    >
                      LogOut
                    </button>
                  )}
                </div>
              </ul>
            ) : (
              <ul className="md:flex hidden gap-10 justify-end">
                <li className="text-lg font-bold">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-lg font-bold">
                  <Link href="/favorite">Favorite</Link>
                </li>
                {id == '' ? (
                  <li className="text-lg font-bold">
                    <Link href="/account/login">Login/signup</Link>
                  </li>
                ) : (
                  <button
                    className="text-lg font-bold"
                    onClick={() => {
                      useLogOut(id, resetId);
                    }}
                  >
                    LogOut
                  </button>
                )}
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
