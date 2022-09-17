import { FC } from 'react';
import Link from 'next/link';
import { HistoryInfo } from '../../types/historyInfo';
import styles from '../../styles/article.module.css';
import Image from 'next/image';
export const History: FC<{ history: HistoryInfo }> = ({ history }) => {
  return (
    <div className="mx-5">
      <div>
        <Link href={history.Article.url}>
          <a target="_blank">
            <article
              className={
                history.Article.kind == 'zenn'
                  ? styles['zennGrad']
                  : styles['qiitaGrad']
              }
            >
              <div className="grid grid-cols-1 place-items-center justify-items-center shadow-2xl p-2 -z-10">
                <div className=" p-2 rounded-md w-full -z-10">
                  <div className="relative">
                    {history.Article.kind == 'zenn' ? (
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
                      {history.Article.title}
                    </h3>
                    <p className=" my-5 justify-self-end">
                      {history.Article.author}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </a>
        </Link>
      </div>
    </div>
  );
};
