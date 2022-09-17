import Link from 'next/link';
import { FC } from 'react';
import { useNoticeStore } from '../../../store/store';
import { useLogOut } from '../../../hooks/User/useLogOut';
import { useUserStore } from '../../../store/store';
interface IProps {
  isShow: boolean;
}
export const LoggedInNavbar: FC<IProps> = ({ isShow }) => {
  const resetUser = useUserStore((state) => state.resetUser);
  const setNotice = useNoticeStore((state) => state.setNotice);
  const logOut = () => {
    useLogOut()
      .then((res) => {
        resetUser();
        setNotice('Logged out!');
        setTimeout(() => {
          setNotice('');
        }, 2 * 1000);
      })
      .catch((error) => {});
  };

  return (
    <ul
      className={
        isShow
          ? 'text-white flex flex-col h-screen items-center justify-center'
          : 'md:flex hidden justify-end'
      }
    >
      <li className="text-lg font-bold py-5 md:py-2 px-3">
        <Link href="/">HOME</Link>
      </li>
      <li className="text-lg font-bold py-5 md:py-2 px-3 z-50">
        <Link href="/about">ABOUT</Link>
      </li>
      <li className="text-lg font-bold py-5 md:py-2 px-3">
        <Link href="/favorite">FAVORITE</Link>
      </li>
      <li className="text-lg font-bold py-5 md:py-2 px-3">
        <Link href="/account">ACCOUNT</Link>
      </li>
      <button className="text-lg font-bold py-5 md:py-2 px-3" onClick={logOut}>
        LOGOUT
      </button>
    </ul>
  );
};
