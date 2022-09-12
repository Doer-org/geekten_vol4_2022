import type { NextPage } from 'next';
import { Layout } from '../components/layouts/Layout';
import Lottie from 'lottie-react';
import * as animationData from '../json/feature.json';
import { useState } from 'react';
import { Article } from '../components/Article/Article';
const Result: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const tryAgain = () => {
    setLoading(true);
  };
  setTimeout(() => {
    setLoading(false);
  }, 3 * 1000);
  return (
    <Layout>
      {loading ? (
        <div className="text-center">
          <div className=" w-44 h-44">
            <Lottie animationData={animationData} />
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 grid-cols-1 w-screen mt-40">
          <div className=" text-center md:border-r-2 md:border-black">
            <h2 className=" text-center text-2xl font-bold">結果</h2>
            <Article />
            <button
              className="my-5 shadow-md rounded-md border p-3 hover:bg-orange-500"
              onClick={() => tryAgain()}
            >
              もう一度する
            </button>
          </div>
          <div className=" md:border-l-2 md:border-black">
            <h2 className="text-center text-2xl font-bold">関連記事</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 max-h-screen overflow-y-scroll overflow-hidden">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((id) => {
                return <Article />;
              })}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Result;
