import { FC, useEffect, useState } from 'react';
import { ArticleInfo } from '../../types/articleInfo';
import { useFetchArticle } from '../../hooks/Article/useFetchArticle';
import { useCreateHistory } from '../../hooks/History/useCreateHistory';
import { useArticleOptionStore } from '../../store/store';
import { useUserStore } from '../../store/store';
import Link from 'next/link';
import Image from 'next/image';
import { FavButton } from '../Favorite/FavButton';
import { Buttons } from '../atoms/Buttons';
import { Twitter } from '../Article/Twitter';
import styles from '../../styles/article.module.css';
export const Article: FC = () => {
  const initial = { id: 0, title: '', likes: 0, url: '', author: '', kind: '' };
  const [article, setArticle] = useState<ArticleInfo>(initial);
  const { option } = useArticleOptionStore();
  const { user } = useUserStore();
  useEffect(() => {
    useFetchArticle(option)
      .then((res) => {
        setArticle(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="mx-5">
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
                <div className=" p-2 rounded-md w-full -z-10">
                  <div className="relative">
                    {article.kind == 'zenn' ? (
                      <Image
                        src="/Zenn.png"
                        height={100}
                        width={100}
                        objectFit="contain"
                        className="relative -z-10"
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
        <div className="my-4 flex justify-end items-center">
          <FavButton user_id={user.id} article_id={article.id} />
          <Twitter
            url={article.url}
            title={`技術記事を読みました！ from DITA🤖 \n\n ${article.title}`}
          />
        </div>
      </div>
    </div>
  );
};
