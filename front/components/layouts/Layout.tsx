import { FC, ReactNode, useEffect } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { useFetchCurrentUser } from '../../hooks/User/useFetchCurrentUser';
import { useUserStore } from '../../store/store';
export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const setUser = useUserStore((state) => state.setUser);
  const { user } = useUserStore();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('user') as string) === null) {
      if (user.id !== '') {
        useFetchCurrentUser(setUser);
      }
    } else {
      setUser(JSON.parse(localStorage.getItem('user') as string));
    }
  }, []);

  return (
    <div className="font-mono text-gray-800">
      <Header />
      <div className="flex min-h-screen w-screen  items-center justify-center">
        <main className="md:my-40 my-28">{children}</main>
      </div>
      <Footer />
    </div>
  );
};
