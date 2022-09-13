import type { NextPage } from 'next';
import { Layout } from '../components/layouts/Layout';
import { Article } from '../components/Article/Article';

const Favorite: NextPage = () => {
  return (
    <Layout>
      <div className="mx-5 md:mx-14">
        <h2 className="mb-20 text-center text-2xl font-bold">お気に入り</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((id) => {
            return <Article key={id} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Favorite;
