import { FC, useEffect, useState } from "react";
import { ArticleInfo } from "../../types/articleInfo";
import { useFetchArticle } from "../../hooks/Article/useFetchArticle";
import { useCreateHistory } from "../../hooks/History/useCreateHistory";
import { useArticleOptionStore } from "../../store/store";
import { useUserStore } from "../../store/store";
import Link from "next/link";
import { Twitter } from "@/components/Article/twitter";
export const Article: FC = () => {
  const initial = { id: 0, title: "", likes: 0, url: "", author: "", kind: "" };
  const [article, setArticle] = useState<ArticleInfo>(initial);
  const { option } = useArticleOptionStore();
  const { user } = useUserStore();
  useEffect(() => {
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
    <div>
      <Link href={article.url}>
        <a
          target="_blank"
          onClick={() => {
            if (user.id !== '') {
              console.log('aaaa');
              useCreateHistory(user.id, article.id);
            }
          }}
        >
          <article className="grid grid-cols-1 shadow-2xl border border-black rounded-md mt-5 mb-10 mx-5 ">
            <div
              className=" bg-lime-300 rounded-md py-10 px-5 break-all"
              style={
                article.kind == 'zenn'
                  ? { backgroundColor: 'rgb(34 211 238)' }
                  : { backgroundColor: 'rgb(190 242 100)' }
              }
            >
              <h3 className="text-lg lg:text-xl font-medium">
                {article.title}
              </h3>
            </div>
            <p className="m-3">{article.author}</p>
          </article>
        </a>
      </Link>
      <div className=" text-left mx-5">
        <FavButton user_id={user.id} article_id={article.id} />
        <Twitter url={article.url} title={`技術記事を読みました！ from DITA🤖 \n\n ${article.title}`} />
      </div>
    </div>
  );
};
