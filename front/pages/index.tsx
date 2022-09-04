import type { NextPage } from 'next';
import { Layout } from '../components/layouts/Layout';
import Lottie from 'lottie-react';
import * as animationData from '../json/robot.json';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center justify-items-center">
        <div className="w-1/2">
          <Lottie animationData={animationData} />
        </div>
        <div className="shadow-2xl rounded-md border w-full h-full text-center flex justify-center items-center p-10">
          <div>
            <h2>DITAはあなたの技術の発見をサポートするサービスです</h2>
            <button className="shadow-md rounded-md border my-5 p-3 hover:bg-orange-500">
              はじめる
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
