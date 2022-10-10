import { Axios } from '../../libs/api';
import { FavoriteInfo } from '../../types/favoriteInfo';
interface FetchFavorite {
  (id: string): Promise<FavoriteInfo[] | undefined>;
}
export const FetchFavorite: FetchFavorite = async (id) => {
  try {
    const { data } = await Axios.get(`/api/favorite/get?user_id=${id}`);
    if (typeof data.Result !== 'undefined') {
      throw new Error('favorite error');
    } else {
      const favorites: FavoriteInfo[] = data;
      return favorites;
    }
  } catch (error) {
    return undefined;
  }
};
