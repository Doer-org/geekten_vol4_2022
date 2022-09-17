import { CreateFavorite } from '../../services/Favorite/CreateFavorite';

type CreateFavorite = (user_id: string, article_id: number) => void;
export const useCreateFavorite: CreateFavorite = async (
  user_id,
  article_id
) => {
  CreateFavorite(user_id, article_id);
};
