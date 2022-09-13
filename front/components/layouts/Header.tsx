import { FC } from 'react';
import style from '../../styles/navbar.module.css';
import { useUserStore } from '../../store/store';
import { useNavStore } from '../../store/store';
import { Navbar } from '../layouts/Nav/Navbar';
import { HomeEl, FavEl, LoginEl, AccountEl, LogoutEl } from './Navbar';
export const Header: FC = () => {
  const { user } = useUserStore();
  const { show } = useNavStore();
  const toggle = useNavStore((show) => show.toggle);

  return (
    <header className="fixed w-screen backdrop-blur-2xl">
      <div className="grid grid-cols-3 sm:px-10 px-3 py-3">
        <h1 className="text-5xl font-extrabold">DITA</h1>
        <nav className="flex items-center justify-end col-span-2">
          <button className="md:hidden z-30" onClick={() => toggle(show)}>
            <div className={style.burgers}>
              <span className={show ? style.child1Open : style.child1}></span>
              <span className={show ? style.child2Open : style.child2}></span>
              <span className={show ? style.child3Open : style.child3}></span>
            </div>
          </button>
          <div>
            {show ? (
              <div className={show ? style.all : undefined}>
                <Navbar
                  user={user}
                  className={
                    'text-white flex flex-col h-screen items-center justify-center'
                  }
                />
              </div>
            ) : (
              <Navbar user={user} className={'md:flex hidden justify-end'} />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
