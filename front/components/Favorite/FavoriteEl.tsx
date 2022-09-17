import Link from 'next/link';
import Image from 'next/image';
import { FavoriteInfo } from '../../types/favoriteInfo';
import { FavButton } from '../Favorite/FavButton';
import { FC } from 'react';
import styles from '../../styles/article.module.css';
export const FavoriteEl: FC<{ favorite: FavoriteInfo }> = ({ favorite }) => {
  return (
    <div>
      <Link href={favorite.Article.url}>
        <a target="_blank">
          <article
            className={
              favorite.Article.kind == 'zenn'
                ? styles['zennGrad']
                : styles['qiitaGrad']
            }
          >
            <div className="grid grid-cols-1 place-items-center justify-items-center shadow-2xl p-5 -z-10 ">
              <div>
                <div className=" p-2 rounded-md w-full -z-10">
                  {favorite.Article.kind == 'zenn' ? (
                    <Image
                      src="/Zenn.png"
                      height={100}
                      width={100}
                      objectFit="contain"
                      className=" relative -z-10"
                    />
                  ) : (
                    <Image
                      src="/Qiita.png"
                      height={100}
                      width={100}
                      objectFit="contain"
                      className="relative -z-10"
                    />
                  )}
                </div>
                <div className="grid grid-cols-1 place-items-center justify-items-center">
                  <h3 className="text-lg lg:text-xl font-medium">
                    {favorite.Article.title}
                  </h3>
                  <p className=" my-5 justify-self-end">
                    {favorite.Article.author}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </a>
      </Link>
      <div className="text-end my-4">
        <FavButton
          user_id={favorite.user_id}
          article_id={favorite.article_id}
        />
      </div>
    </div>
  );
};
