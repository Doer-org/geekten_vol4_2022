import { Axios } from '../../libs/api';
type DeleteFavorite = (user_id: string, article_id: number) => void;
export const DeleteFavorite: DeleteFavorite = (user_id, article_id) => {
  const formData = new FormData();
  formData.append('user_id', user_id);
  formData.append('article_id', `${article_id}`);
  Axios.post('/api/favorite/delete', formData)
    .then((res) => {
      console.log('favorite delete api seikou!!!');
      console.log(res);
    })
    .catch((err) => {
      console.log('favorite delete api sippai!!');
      console.log(err);
    });
};
