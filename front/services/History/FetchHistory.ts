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
  const { data } = await Axios.get(`/api/history/get?user_id=${id}`);
  if (typeof data.Result !== 'undefined') {
    throw new Error('favorite error');
  } else {
    const tmp: HistoryInfo[] = data;
    return tmp;
  }
};
