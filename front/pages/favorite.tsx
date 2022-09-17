import type { NextPage } from 'next';
import { Layout } from '../components/layouts/Layout';
import { FavoriteInfo } from '../types/favoriteInfo';
import { useState, useEffect } from 'react';
import { useFetchFavorite } from '../hooks/Favorite/useFetchFavorite';
import { FavoriteEl } from '../components/Favorite/FavoriteEl';
const Favorite: NextPage = () => {
  const [favorites, setFavorites] = useState<null | FavoriteInfo[]>();
  useEffect(() => {
    const user_id = JSON.parse(localStorage.getItem('user') as string).id;
    useFetchFavorite(user_id)
      .then((res) => {
        setFavorites(res);
      })
      .catch((err) => {});
  }, []);
  return (
    <Layout>
      <div className="mx-5 md:mx-14">
        <h2 className="mb-20 text-center text-2xl font-bold">お気に入り</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center justify-items-center">
          {favorites?.map((fav, id) => {
            return <FavoriteEl key={id} favorite={fav} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Favorite;
