// userupdate := http.HandlerFunc(userHandler.UpdateUser)
// 	http.Handle("/api/user/update", middleware.Layres(userupdate))
import axios from 'axios';
export const UpdateUser = () => {
  return axios.get('http://localhost:8000/api/user/update');
};
