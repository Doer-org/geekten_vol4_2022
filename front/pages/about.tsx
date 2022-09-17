import type { NextPage } from 'next';
import { Layout } from '../components/layouts/Layout';
import Image from 'next/image';
import Link from 'next/link';

const About: NextPage = () => {
  const users = [
    { name: 'kai-0307', image: 'jpg' },
    { name: 'mahiro72', image: 'png' },
    { name: 'meow520', image: 'jpg' },
    { name: 'nisi0929', image: 'png' },
    { name: 'seipan', image: 'jpg' },
  ];

  return (
    <Layout>
      <div className="text-center">
        <h2 className="text-2xl font-bold">Contoributers</h2>
        <p className="mt-5 mb-20">
          2022年9月に行われた技育展で作成したプロジェクトです
        </p>
        <div className="mx-10 flex flex-wrap justify-center gap-5">
          {users.map((user) => {
            return (
              <div key={user.name}>
                <div className="text-center grid grid-cols-1 shadow-2xl">
                  <Link
                    href={`https://github.com/${user.name}`}
                    key={user.name}
                  >
                    <a
                      target="_blank"
                      className="py-3 px-10 hover:-mt-2 transition-all rounded-md hover:bg-amber-400"
                    >
                      {user.name}
                    </a>
                  </Link>
                  <div className="my-3 ">
                    <Image
                      className="rounded-full relative -z-10"
                      src={`/profiles/${user.name}.${user.image}`}
                      height={100}
                      width={100}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default About;
