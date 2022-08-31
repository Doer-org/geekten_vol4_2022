import { FC } from "react";
import Link from "next/link";
import Login from "../../pages/account/login";

export const Header: FC = () => {
  return (
    <header>
      <div>
        <h1>DITA</h1>

        <nav className="">
          <ul>
            <li><Link href="/account/login">Login</Link></li>

          </ul>
        </nav>
      </div>
    </header>
  );
};
