import { DeleteFavorite } from '../../services/Favorite/DeleteFavorite';

type CreateFavorite = (user_id: string, article_id: number) => void;
export const useDeleteFavorite: CreateFavorite = async (
  user_id,
  article_id
) => {
  DeleteFavorite(user_id, article_id);
};
