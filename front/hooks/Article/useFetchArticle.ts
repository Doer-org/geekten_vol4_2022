import { ArticleInfo, Option } from '../../types/articleInfo';
import { FetchRandomArticle } from '../../services/Article/FetchRandomArticle';
import { AxiosResponse } from 'axios';
type FetchRandomArticle = (
  option: Option
) => Promise<AxiosResponse<ArticleInfo, any>>;
export const useFetchArticle: FetchRandomArticle = async (option) => {
  const article = await FetchRandomArticle(option);
  return article;
};
