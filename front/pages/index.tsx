import type { NextPage } from 'next';
import { Layout } from '../components/layouts/Layout';
import Lottie from 'lottie-react';
import * as animationData from '../json/robot.json';
import { useNoticeStore } from '../store/store';
import { Buttons } from '../components/atoms/Buttons';
const Home: NextPage = () => {
  const { notice } = useNoticeStore();

  return (
    <Layout>
      <div className="h-10 w-full">
        <div className="h-full mr-5 flex justify-center" hidden={notice === ''}>
          <p
            className="text-center text-lg my-auto bg-amber-500 font-bold px-10 py-3 rounded-md"
            hidden={notice === ''}
          >
            {notice}
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center justify-items-center">
        <div className="w-1/2">
          <Lottie animationData={animationData} />
          <p className="text-center text-gray-400">by Mikhail Voloshin</p>
        </div>
        <div className="shadow-2xl rounded-md border text-center flex justify-center items-center p-5 w-full md:w-4/6 my-5">
          <div className="mx-10">
            <h2 className="my-5">
              DITAはあなたの技術の発見をサポートするサービスです
            </h2>
            <p className="my-3 font-semibold">mode</p>
            <div className=" flex justify-center">
              <Buttons />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
