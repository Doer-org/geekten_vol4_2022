import { FC, useEffect, useState } from 'react';
import { ArticleInfo } from '../../types/articleInfo';
import { useFetchArticle } from '../../hooks/useFetchArticle';
import { useArticleOptionStore } from '../../store/store';
import Link from 'next/link';
export const Article: FC = () => {
  const initial = { id: 0, title: '', likes: 0, url: '', author: '', kind: '' };
  const [article, setArticle] = useState<ArticleInfo>(initial);
  const { option } = useArticleOptionStore();
  useEffect(() => {
    // 一旦popularityにしてるけどここはどうするか
    useFetchArticle(option)
      .then((res) => {
        setArticle(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Link href={article.url}>
      <a target="_blank">
        <article className="grid grid-cols-1 shadow-2xl border border-black rounded-md mt-5 mb-10 mx-5 ">
          <div
            className=" bg-lime-300 rounded-md py-10 px-5 break-all"
            style={
              article.kind == 'zenn'
                ? { backgroundColor: 'rgb(34 211 238)' }
                : { backgroundColor: 'rgb(190 242 100)' }
            }
          >
            <h3 className="text-lg lg:text-xl font-medium">{article.title}</h3>
          </div>
          <p className="m-3">{article.author}</p>
        </article>
      </a>
    </Link>
  );
};
