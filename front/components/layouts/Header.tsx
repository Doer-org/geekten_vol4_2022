import { FC, useState } from 'react';
import style from '../../styles/navbar.module.css';
import { useUserStore } from '../../store/store';
import { Navbar } from '../layouts/Nav/Navbar';
import { LoggedInNavbar } from '../layouts/Nav/LoggedInNavbar';
export const Header: FC = () => {
  const { user } = useUserStore();

  const [nav, setNav] = useState<boolean>(false);
  return (
    <header className="fixed w-screen backdrop-blur-2xl">
      <div className="grid grid-cols-3 sm:px-10 px-3 py-3">
        <h1 className="text-5xl font-extrabold">DITA</h1>
        <nav className="flex items-center justify-end col-span-2">
          <button className="md:hidden z-50" onClick={() => setNav(!nav)}>
            <div className={style.burgers}>
              <span className={nav ? style.child1Open : style.child1}></span>
              <span className={nav ? style.child2Open : style.child2}></span>
              <span className={nav ? style.child3Open : style.child3}></span>
            </div>
          </button>
          <div>
            {user.id == '' ? (
              <div className={nav ? style.all : undefined}>
                <Navbar isShow={nav} />
              </div>
            ) : (
              <div className={nav ? style.all : undefined}>
                <LoggedInNavbar isShow={nav} />
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
