import { FetchFavorite } from '../../services/Favorite/FetchFavorite';
import { FavoriteInfo } from '../../types/favoriteInfo';

type FetchFavorite = (id: string) => Promise<FavoriteInfo[]>;
export const useFetchFavorite: FetchFavorite = async (id) => {
  const favorites = await FetchFavorite(id);
  return favorites;
};
