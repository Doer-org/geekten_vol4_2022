import { Axios } from '../../libs/api';
import { HistoryInfo } from '../../types/historyInfo';
interface FetchHistory {
  (id: string): Promise<HistoryInfo[] | undefined>;
}
export const FetchHistory: FetchHistory = async (id) => {
  try {
    const { data } = await Axios.get(`/api/history/get?user_id=${id}`);
    if (typeof data.Result !== 'undefined') {
      throw new Error('history error');
    } else {
      const histories: HistoryInfo[] = data;
      return histories;
    }
  } catch (error) {
    return undefined;
  }
};
