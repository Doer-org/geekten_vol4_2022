import Link from 'next/link';
import { FavoriteInfo } from '../../types/favoriteInfo';
import { FavButton } from '../Favorite/FavButton';
import { FC } from 'react';
export const FavoriteEl: FC<{ favorite: FavoriteInfo }> = ({ favorite }) => {
  return (
    <div>
      <Link href={favorite.Article.url}>
        <a target="_blank">
          <article className="grid grid-cols-1 shadow-2xl border border-black rounded-md mt-5 mb-10 mx-5 ">
            <div
              className=" bg-lime-300 rounded-md py-10 px-5 break-all"
              style={
                favorite.Article.kind == 'zenn'
                  ? { backgroundColor: 'rgb(34 211 238)' }
                  : { backgroundColor: 'rgb(190 242 100)' }
              }
            >
              <h3 className="text-lg lg:text-xl font-medium">
                {favorite.Article.title}
              </h3>
            </div>
            <p className="m-3">{favorite.Article.author}</p>
          </article>
        </a>
      </Link>
      <FavButton user_id={favorite.user_id} article_id={favorite.article_id} />
    </div>
  );
};
