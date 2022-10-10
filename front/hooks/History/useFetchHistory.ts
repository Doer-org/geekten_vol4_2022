import { FetchHistory } from '../../services/History/FetchHistory';
import { HistoryInfo } from '../../types/historyInfo';

type FetchHistory = (id: string) => Promise<HistoryInfo[] | undefined>;
export const useFetchHistory: FetchHistory = async (id) => {
  const history = await FetchHistory(id);
  return history;
};
