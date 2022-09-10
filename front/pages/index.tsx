import type { NextPage } from 'next';
import { Layout } from '../components/layouts/Layout';
import Lottie from 'lottie-react';
import * as animationData from '../json/robot.json';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center justify-items-center">
        <div className="w-1/2">
          <Lottie animationData={animationData} />
        </div>
        <div className="shadow-2xl rounded-md border text-center flex justify-center items-center p-10">
          <div>
            <h2 className="my-5">
              DITAはあなたの技術の発見をサポートするサービスです
            </h2>
            <Link href="/result">
              <a className="shadow-md rounded-md border p-3 hover:bg-orange-500">
                はじめる
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
