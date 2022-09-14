import { FC, ReactNode, useEffect } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { useFetchCurrentUser } from '../../hooks/useFetchCurrentUser';
import { useUserStore } from '../../store/store';
export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const setUser = useUserStore((state) => state.setUser);
  const { user } = useUserStore();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('user') as string) === null) {
      if (user.id !== '') {
        useFetchCurrentUser(setUser);
        console.log('api tataita');
      }
    } else {
      setUser(JSON.parse(localStorage.getItem('user') as string));
      console.log('cache tataita');
    }
  }, []);

  return (
    <div className="font-mono text-gray-800">
      <Header />
      <div className="flex flex-col min-h-screen w-screen  items-center justify-center">
        <main className="my-40">{children}</main>
      </div>
      <Footer />
    </div>
  );
};
