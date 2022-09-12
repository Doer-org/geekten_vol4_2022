import { Axios } from '../../libs/api';
export const Test = () => {
  Axios.get('/api')
    .then((res) => {
      console.log(res);
    })
    .catch(() => {
      console.log('get sippai');
    });
};
