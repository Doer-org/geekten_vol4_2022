import { Axios } from '../../libs/api';
type DeleteFavorite = (user_id: string, article_id: number) => void;
export const DeleteFavorite: DeleteFavorite = (user_id, article_id) => {
  Axios.delete('/api/favorite/delete', {
    params: { user_id: user_id, article_id: article_id },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
