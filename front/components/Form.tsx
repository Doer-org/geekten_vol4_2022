import { FC, useState } from 'react';
import { useLogin } from '../hooks/User/useLogin';
import { useUserStore } from '../store/store';
import Image from 'next/image';
import { useNoticeStore } from '../store/store';

const Form: FC<{ title: string }> = ({ title }) => {
  const setUser = useUserStore((state) => state.setUser);
  const setNotice = useNoticeStore((state) => state.setNotice);

  const Login = () => {
    useLogin()
      .then((res) => {
        setUser(res);
        setNotice('Logged in!');
        setTimeout(() => {
          setNotice('');
        }, 2 * 1000);
      })
      .catch((err) => {});
  };
  return (
    <div className="shadow-2xl rounded-md p-5">
      <button className="px-5 py-3 rounded-md" onClick={Login}>
        <div className="-z-10 relative ">
          <Image
            src="/Github.png"
            alt="logo"
            width={70}
            height={70}
            className="relative rounded-full bg-black"
          />
        </div>

        <p className="py-5">Githubでログイン</p>
      </button>
    </div>
  );
};

export default Form;
