import { Axios } from '../../libs/api';
type CreateHistory = (user_id: string, article_id: number) => void;
export const CreateHistory: CreateHistory = (user_id, article_id) => {
  const formData = new FormData();
  formData.append('id', user_id);
  formData.append('name', `${article_id}`);
  Axios.post('/api/user/create', formData)
    .then((res) => {
      console.log('history create api seikou!!!');
      console.log(res);
    })
    .catch((err) => {
      console.log('history create api sippai!!');
      console.log(err);
    });
};
