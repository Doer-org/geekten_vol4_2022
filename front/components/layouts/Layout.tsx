import { FC, ReactNode } from 'react';
import { Header } from './Header';
export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="font-mono text-gray-800">
      <Header />
      <div className="flex mx-5 min-h-screen">
        <main className="flex w-screen  items-center justify-center">
          {children}
        </main>
      </div>
    </div>
  );
};
