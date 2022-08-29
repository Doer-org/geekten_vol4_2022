import { FC, ReactNode } from 'react';
import { Header } from './Header';
export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex my-10 mx-5 min-h-screen font-mono text-gray-800">
      <Header />
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
};
