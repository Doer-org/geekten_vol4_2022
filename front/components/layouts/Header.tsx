import { FC } from 'react';
import style from '../../styles/navbar.module.css';
import { useUserStore } from '../../store/store';
import { useNavStore } from '../../store/store';

import { HomeEl, FavEl, LoginEl, AccountEl, LogoutEl } from './Navbar';
export const Header: FC = () => {
  const { user } = useUserStore();
  const { show } = useNavStore();
  const toggle = useNavStore((show) => show.toggle);

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
                  <HomeEl />
                  <FavEl />
                  {user.id == '' ? (
                    <LoginEl />
                  ) : (
                    <div>
                      <LogoutEl />
                      <AccountEl />
                    </div>
                  )}
                </div>
              </ul>
            ) : (
              <ul className="md:flex hidden gap-10 justify-end">
                <HomeEl />
                <FavEl />
                {user.id == '' ? (
                  <LoginEl />
                ) : (
                  <div className="flex gap-10">
                    <LogoutEl />
                    <AccountEl />
                  </div>
                )}
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
