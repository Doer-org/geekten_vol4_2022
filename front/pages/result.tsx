import type { NextPage } from 'next';
import { Layout } from '../components/layouts/Layout';
import Lottie from 'lottie-react';
import * as animationData from '../json/feature.json';
import { useState } from 'react';
import Link from 'next/link';

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
            <article className="grid grid-cols-1 shadow-2xl border border-black rounded-md mt-5 mb-10 mx-5">
              <div className="text-center bg-lime-300 rounded-md py-10 px-5 break-all">
                <h3 className=" text-xl">
                  計算量オーダーの求め方を総整理！ 〜 どこから log が出て来るか
                  〜
                </h3>
              </div>
              <p className="m-3">
                世の中の様々なシステムやソフトウェアはアルゴリズムによって支えられています。Qiita
                Contribution
                ランキング作成のために用いるソートアルゴリズムのような単純なものから.....
              </p>
              <div className=" grid md:grid-cols-5 grid-cols-2 place-items-center justify-items-center">
                <p className="p-1 shadow-md border rounded-md m-3">atcoder</p>
                <p className="p-1 shadow-md border rounded-md m-3">C++</p>
                <p className="p-1 shadow-md border rounded-md m-3">python</p>
                <p className="p-1 shadow-md border rounded-md m-3">Ruby</p>
              </div>
            </article>
            <button
              className="my-5 shadow-md rounded-md border p-3 hover:bg-orange-500"
              onClick={() => tryAgain()}
            >
              もう一度する
            </button>
          </div>
          <div className=" md:border-l-2 md:border-black">
            <h2 className="text-center text-2xl font-bold">関連記事</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 max-h-screen overflow-y-scroll overflow-hidden">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((id) => {
                return (
                  <article
                    className="shadow-2xl border border-black rounded-md m-5"
                    key={id}
                  >
                    <div className="text-center bg-cyan-200 rounded-md py-10 px-5 break-all">
                      <h3 className=" text-xl">
                        計算量オーダーの求め方を総整理！ 〜 どこから log
                        が出て来るか 〜
                      </h3>
                    </div>
                    <p className="m-3">
                      世の中の様々なシステムやソフトウェアはアルゴリズムによって支えられています。Qiita
                      Contribution
                      ランキング作成のために用いるソートアルゴリズムのような単純なものから.....
                    </p>
                    <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 place-items-center justify-items-center">
                      <p className="p-1 shadow-md border rounded-md m-3">
                        atcoder
                      </p>
                      <p className="p-1 shadow-md border rounded-md m-3">C++</p>
                      <p className="p-1 shadow-md border rounded-md m-3">
                        python
                      </p>
                      <p className="p-1 shadow-md border rounded-md m-3">
                        Ruby
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Result;
