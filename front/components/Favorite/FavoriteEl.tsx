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
                ? styles['zennGradient']
                : styles['qiitaGradient']
            }
          >
            <div className="grid grid-cols-1 place-items-center justify-items-center shadow-2xl p-5 ">
              <div>
                <div className={(styles.zennGradient, 'relative w-20 h-20')}>
                  {favorite.Article.kind == 'zenn' ? (
                    <Image src="/Zenn.png" layout="fill" objectFit="contain" />
                  ) : (
                    <Image src="/Qiita.png" layout="fill" objectFit="contain" />
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
