import { Axios } from '../../libs/api';
import { AxiosResponse } from 'axios';
import { ArticleInfo } from '../../types/articleInfo';

interface FetchRandomArticles {
  (): Promise<AxiosResponse<ArticleInfo[], any>>;
}
export const FetchRandomArticles: FetchRandomArticles = () => {
  const article = Axios.get(`/api/article/randomten`);
  return article;
};

