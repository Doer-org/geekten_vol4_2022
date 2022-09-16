import { CreateHistory } from '../../services/History/CreateHistory';

type CreateHistory = (user_id: string, article_id: number) => void;
export const useCreateHistory: CreateHistory = async (user_id, article_id) => {
  CreateHistory(user_id, article_id);
};
