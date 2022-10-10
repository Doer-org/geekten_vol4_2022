import { ArticleInfo, Option } from '../../types/articleInfo';
import { FetchRandomArticle } from '../../services/Article/FetchRandomArticle';
type FetchRandomArticle = (option: Option) => Promise<ArticleInfo | undefined>;
export const useFetchArticle: FetchRandomArticle = async (option) => {
  const article = await FetchRandomArticle(option);
  return article;
};
