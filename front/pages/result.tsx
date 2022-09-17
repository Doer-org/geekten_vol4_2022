import type { NextPage } from 'next';
import { Layout } from '../components/layouts/Layout';
import Lottie from 'lottie-react';
import * as animationData from '../json/feature.json';
import { useState, useEffect } from 'react';
import { Article } from '../components/Article/Article';
import { RelativeArticle } from '../components/Article/RelativeArticle';
import { useFetchArticles } from '../hooks/Article/useFetchArticles';
import { ArticleInfo } from '../types/articleInfo';

const Result: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<ArticleInfo[]>([]);

  const tryAgain = () => {
    setLoading(true);
  };
  setTimeout(() => {
    setLoading(false);
  }, 3 * 1000);

  useEffect(() => {
    useFetchArticles()
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <Layout>
      {loading ? (
        <div className="text-center">
          <div className=" w-44 h-44">
            <Lottie animationData={animationData} />
            <p className="text-center text-gray-400">
              Animation by: MD ABDUR RAHIM
            </p>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 grid-cols-1 w-screen">
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

          <div className=" md:border-l-2 md:border-black px-5">
            <h2 className="text-center text-2xl font-bold">関連記事</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 max-h-screen overflow-y-scroll overflow-hidden">
              {articles.map((article: ArticleInfo) => {
                return <RelativeArticle article={article} key={article.id} />;
              })}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Result;
