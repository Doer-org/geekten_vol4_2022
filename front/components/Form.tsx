import { FC } from 'react';
import { useLogin } from '../hooks/User/useLogin';
import { useUserStore } from '../store/store';
import Image from 'next/image';

const Form: FC<{ title: string }> = ({ title }) => {
  const setUser = useUserStore((state) => state.setUser);
  const Login = () => {
    useLogin()
      .then((res) => {
        setUser(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
