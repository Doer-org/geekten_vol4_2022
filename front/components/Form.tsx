import { FC } from 'react';
import { useLogin } from '../hooks/useLogin';
import { FetchUser } from '../services/User/FetchUser';
import { useUserStore } from '../store/store';
import { useNavStore } from '../store/store';
import Image from 'next/image';

const Form: FC<{ title: string }> = ({ title }) => {
  const { user } = useUserStore();
  const { show } = useNavStore();
  const setUser = useUserStore((state) => state.setUser);
  return (
    <div className="shadow-md rounded-md p-5">
      <div>{user.id}</div>
      <button
        className="flex bg-black hover:bg-slate-800 px-5 py-3  justify-center items-center rounded-md"
        onClick={() => {
          useLogin()
            .then((res) => {
              setUser(res);
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        {show ? (
          ''
        ) : (
          <Image
            src="/Github.png"
            objectFit="contain"
            alt="logo"
            width={70}
            height={70}
            className="bg-black"
          />
        )}

        <p className="px-5 text-white">Githubでログイン</p>
      </button>
    </div>
  );
};

export default Form;
