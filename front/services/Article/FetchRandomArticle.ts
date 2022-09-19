import { Axios } from '../../libs/api';
import { ArticleInfo } from '../../types/articleInfo';
type Option = 'popularity' | 'nich' | 'normal';
interface FetchRandomArticle {
  (option: Option): Promise<ArticleInfo | undefined>;
}
export const FetchRandomArticle: FetchRandomArticle = async (option) => {
  try {
    const { data } = await Axios.get(`/api/article/random?type=${option}`);
    if (typeof data.Result !== 'undefined') {
      throw new Error('article error');
    } else {
      const article: ArticleInfo = data;
      return article;
    }
  } catch (error) {
    return undefined;
  }
};
