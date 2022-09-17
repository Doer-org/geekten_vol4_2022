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
    <div>
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
                  ? styles['zennGradient']
                  : styles['qiitaGradient']
              }
            >
              <div className="grid grid-cols-1 place-items-center justify-items-center shadow-2xl p-5 ">
                <div>
                  <div className={(styles.zennGradient, 'relative w-20 h-20')}>
                    {article.kind == 'zenn' ? (
                      <Image
                        src="/Zenn.png"
                        layout="fill"
                        objectFit="contain"
                      />
                    ) : (
                      <Image
                        src="/Qiita.png"
                        layout="fill"
                        objectFit="contain"
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
          <FavButton user_id={user.id} article_id={article.id} />
        </div>
      </div>
    </div>
  );
};
