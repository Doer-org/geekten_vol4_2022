import { FC } from 'react';
import { ArticleInfo } from '../../types/articleInfo';
import { useUserStore } from '../../store/store';
import { useCreateHistory } from '../../hooks/History/useCreateHistory';
import Link from 'next/link';
export const RelativeArticle: FC<{ article: ArticleInfo }> = ({ article }) => {
  const { user } = useUserStore();

  return (
    <div>
      <div>
        <Link href={article?.url}>
          <a
            target="_blank"
            onClick={() => {
              if (user.id !== '') {
                useCreateHistory(user.id, article.id);
              }
            }}
          >
            <article className="grid grid-cols-1 shadow-2xl border border-black rounded-md mt-5 mb-10 mx-5 ">
              <div
                className=" bg-lime-300 rounded-md py-10 px-5 break-all"
                style={
                  article?.kind == 'zenn'
                    ? { backgroundColor: 'rgb(34 211 238)' }
                    : { backgroundColor: 'rgb(190 242 100)' }
                }
              >
                <h3 className="text-lg lg:text-xl font-medium">
                  {article.title}
                </h3>
              </div>
              <p className="m-3 text-center">{article.author}</p>
            </article>
          </a>
        </Link>
      </div>
    </div>
  );
};
