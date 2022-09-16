import { FC } from 'react';
import Link from 'next/link';
import { HistoryInfo } from '../../types/historyInfo';
export const History: FC<{ history: HistoryInfo }> = ({ history }) => {
  return (
    <Link href={history.Article.url}>
      <a
        target="_blank"
        onClick={() => {
          console.log('fhdskhflasj');
        }}
      >
        <article className="grid grid-cols-1 shadow-2xl border border-black rounded-md mt-5 mb-10 mx-5 ">
          <div
            className=" bg-lime-300 rounded-md py-10 px-5 break-all"
            style={
              history.Article.kind == 'zenn'
                ? { backgroundColor: 'rgb(34 211 238)' }
                : { backgroundColor: 'rgb(190 242 100)' }
            }
          >
            <h3 className="text-lg lg:text-xl font-medium">
              {history.Article.title}
            </h3>
          </div>
          <p className="m-3">{history.Article.author}</p>
        </article>
      </a>
    </Link>
  );
};
