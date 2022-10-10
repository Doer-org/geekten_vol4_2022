import { Axios } from '../../libs/api';
import { ArticleInfo } from '../../types/articleInfo';

interface FetchRandomArticles {
  (): Promise<ArticleInfo[] | undefined>;
}
export const FetchRandomArticles: FetchRandomArticles = async () => {
  try {
    const { data } = await Axios.get(`/api/article/randomten`);
    if (typeof data.Result !== 'undefined') {
      throw new Error('articles error');
    } else {
      const articles: ArticleInfo[] = data;
      return articles;
    }
  } catch (error) {
    return undefined;
  }
};
