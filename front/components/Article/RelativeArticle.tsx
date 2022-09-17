import { FC } from 'react';
import { ArticleInfo } from '../../types/articleInfo';
import { FavButton } from '../../components/Favorite/FavButton';
import { useUserStore } from '../../store/store';
import { useCreateHistory } from '../../hooks/History/useCreateHistory';
import Image from 'next/image';
import styles from '../../styles/article.module.css';
import Link from 'next/link';
export const RelativeArticle: FC<{ article: ArticleInfo }> = ({ article }) => {
  const { user } = useUserStore();
  return (
    <div className="m-5">
      <div>
        <Link href={article.url}>
          <a
            target="_blank"
            onClick={() => {
              if (user.id !== '') {
                useCreateHistory(user.id, article.id);
              }
            }}
          >
            <article
              className={
                article.kind == 'zenn'
                  ? styles['zennGrad']
                  : styles['qiitaGrad']
              }
            >
              <div className="grid grid-cols-1 place-items-center justify-items-center shadow-2xl p-2 -z-10">
                <div className="p-2 rounded-md w-full -z-10">
                  <div className="relative">
                    {article.kind == 'zenn' ? (
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
                      {article.title}
                    </h3>
                    <p className=" my-5 justify-self-end">{article.author}</p>
                  </div>
                </div>
              </div>
            </article>
          </a>
        </Link>
        <div className="text-end my-4">
          {user.id && <FavButton user_id={user.id} article_id={article.id} />}
        </div>
      </div>
    </div>
  );
};
