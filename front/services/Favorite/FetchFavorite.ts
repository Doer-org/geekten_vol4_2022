import { Axios } from '../../libs/api';
import { FavoriteInfo } from '../../types/favoriteInfo';
type Error = {
  Status: number;
  Result: string;
};
interface FetchFavorite<T> {
  (id: string): Promise<FavoriteInfo[]>;
}
export const FetchFavorite: FetchFavorite<
  Promise<FavoriteInfo[]> | Error
> = async (id) => {
  const res = await Axios.get(`/api/favorite/get?user_id=${id}`);
  return res.data;
};
