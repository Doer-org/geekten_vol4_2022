import { ArticleInfo } from '../../types/articleInfo';
import { FetchRandomArticles } from '../../services/Article/FetchRamdomArticles';
type FetchRandomArticles = () => Promise<ArticleInfo[] | undefined>;
export const useFetchArticles: FetchRandomArticles = async () => {
  const article = await FetchRandomArticles();
  return article;
};
