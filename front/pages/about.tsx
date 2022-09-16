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
        <div className="flex flex-wrap justify-center gap-10 mx-10">
          {users.map((user) => {
            return (
              <Link href={`https://github.com/${user.name}`}>
                <a
                  target="_blank"
                  className="shadow-xl p-5 hover:bg-amber-300 hover:-mt-2 transition-all rounded-md"
                >
                  <div className="text-center">
                    <p>{user.name}</p>
                    <Image
                      className="rounded-full -z-10 relative"
                      src={`/profiles/${user.name}.${user.image}`}
                      height={100}
                      width={100}
                    />
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default About;
