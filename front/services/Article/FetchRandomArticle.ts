import { Axios } from '../../libs/api';
import { AxiosResponse } from 'axios';
import { ArticleInfo } from '../../types/articleInfo';
type Option = 'popularity' | 'nich' | 'normal';
interface FetchRandomArticle {
  (option: Option): Promise<AxiosResponse<ArticleInfo, any>>;
}
export const FetchRandomArticle: FetchRandomArticle = (option) => {
  const article = Axios.get(`/api/article/random?type=${option}`);
  return article;
};
