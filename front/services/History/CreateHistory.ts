import { Axios } from '../../libs/api';
type CreateHistory = (user_id: string, article_id: number) => void;
export const CreateHistory: CreateHistory = (user_id, article_id) => {
  const formData = new FormData();
  formData.append('user_id', user_id);
  formData.append('article_id', `${article_id}`);
  Axios.post('/api/history/create', formData)
    .then((res) => {})
    .catch((err) => {});
};
