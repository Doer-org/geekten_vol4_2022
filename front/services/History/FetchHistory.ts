import { Axios } from '../../libs/api';
import { HistoryInfo } from '../../types/historyInfo';
type Error = {
  Status: number;
  Result: string;
};
interface FetchHistory<T> {
  (id: string): Promise<HistoryInfo[]>;
}
export const FetchHistory: FetchHistory<
  Promise<HistoryInfo[]> | Error
> = async (id) => {
  const res = await Axios.get(`/api/history/get?user_id=${id}`);
  return res.data;
};
