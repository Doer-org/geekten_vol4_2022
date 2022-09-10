import { FC } from "react";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Link from "next/link";

export const Footer: FC = () => {
  return (
    <footer>
      <div className="bg-slate-50 h-28 flex justify-center">
        <Link href="https://doer.vercel.app/">
          <Image src={Logo} width={80} height={160}></Image>
        </Link>
      </div>
    </footer>
  );
};
