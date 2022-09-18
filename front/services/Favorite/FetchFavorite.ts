import { Axios } from '../../libs/api';
import { FavoriteInfo } from '../../types/favoriteInfo';
// type Error = {
//   Status: number;
//   Result: string;
// };
interface FetchFavorite {
  (id: string): Promise<FavoriteInfo[] | undefined>;
}
export const FetchFavorite: FetchFavorite = async (id) => {
  try {
    const { data } = await Axios.get(`/api/favorite/get?user_id=${id}`);
    console.log(data);
    if (typeof data.Result !== 'undefined') {
      throw new Error('favorite error');
    } else {
      const tmp: FavoriteInfo[] = data;
      return tmp;
    }
  } catch (error) {
    // return Error('error in fetchFavorite' + error);
    return undefined;
  }
};
