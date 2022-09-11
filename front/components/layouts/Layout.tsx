import { FC, ReactNode, useEffect } from 'react';
import { Header } from './Header';
import { useFetchCurrentUser } from '../../hooks/useFetchCurrentUser';
import { useUserStore } from '../../store/store';
export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const setUser = useUserStore((state) => state.setUser);
  const { user } = useUserStore();
  useEffect(() => {
    if (user !== null) {
      useFetchCurrentUser(setUser);
    }
  }, []);
  return (
    <div className="font-mono text-gray-800">
      <Header />
      <div className="flex min-h-screen">
        <main className="flex w-screen  items-center justify-center">
          {children}
        </main>
      </div>
    </div>
  );
};
