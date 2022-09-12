import { FC } from 'react';
import Image from 'next/image';
import Logo from '../../public/logo.svg';
import Link from 'next/link';

export const Footer: FC = () => {
  return (
    <footer className="relative">
      <div className="h-20 absolute w-screen bottom-0 flex justify-center items-center ">
        <Link href="https://doer.vercel.app/">
          <div className="relative w-24 h-20 ml-3">
            <Image src={Logo} alt="logo" layout="fill" />
          </div>
        </Link>
      </div>
    </footer>
  );
};
