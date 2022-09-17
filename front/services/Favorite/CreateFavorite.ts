import { Axios } from '../../libs/api';
type CreateFavorite = (user_id: string, article_id: number) => void;
export const CreateFavorite: CreateFavorite = (user_id, article_id) => {
  const formData = new FormData();
  formData.append('user_id', user_id);
  formData.append('article_id', `${article_id}`);
  Axios.post('/api/favorite/create', formData)
    .then((res) => {
      console.log('favorite create api seikou!!!');
      console.log(res);
    })
    .catch((err) => {
      console.log('favorite create api sippai!!');
      console.log(err);
    });
};
