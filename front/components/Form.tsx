import { FC } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useFetchCurrentUser } from '../hooks/useFetchCurrentUser';
import { useStore } from '../store/store';
import { useNavStore } from '../store/store';
import Image from 'next/image';

const Form: FC<{ title: string }> = ({ title }) => {
  const { id } = useStore();
  const { show } = useNavStore();
  const setId = useStore((state) => state.setId);
  return (
    <div className="shadow-md rounded-md p-5">
      <div>{id}</div>
      <button
        className="flex bg-black hover:bg-slate-800 px-5 py-3  justify-center items-center rounded-md"
        onClick={() => {
          useLogin(id, setId);
          useFetchCurrentUser(setId);
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
