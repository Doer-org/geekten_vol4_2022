import { ArticleInfo } from "../../types/articleInfo";
import { FetchRandomArticles } from "../../services/Article/FetchRamdomArticles";
import { AxiosResponse } from "axios";
type FetchRandomArticles = () => Promise<AxiosResponse<ArticleInfo[], any>>;
export const useFetchArticles: FetchRandomArticles = async () => {
  const article = await FetchRandomArticles();
  return article;
};
