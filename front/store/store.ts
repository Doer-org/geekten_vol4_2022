import create from 'zustand';
import { UserInfo } from '../types/userInfo';
import { HistoryInfo } from '../types/historyInfo';
import { Option } from '../types/articleInfo';
type User = {
  user: UserInfo;
  setUser: (user: UserInfo) => void;
  editUser: (id: string, name: string) => void;
  resetUser: () => void;
};

type useArticleOptionStore = {
  option: Option;
  setOption: (option: Option) => void;
};

type Nav = {
  show: boolean;
  toggle: (show: boolean) => void;
};

type ArticleHistory = {
  history: HistoryInfo[] | null;
  setHistory: (history: HistoryInfo[]) => void;
};

export const useUserStore = create<User>((set) => ({
  user: { id: '', name: '' },
  setUser: (user) => set({ user: user }),
  editUser: (id, name) => set({ user: { id: id, name: name } }),
  resetUser: () => set({ user: { id: '', name: '' } }),
}));

export const useArticleOptionStore = create<useArticleOptionStore>((set) => ({
  option: 'popularity',
  setOption: (option) => set({ option: option }),
}));

export const useHistoryStore = create<ArticleHistory>((set) => ({
  history: null,
  setHistory: (histories) => set({ history: histories }),
}));

export const useNavStore = create<Nav>((set) => ({
  show: false,
  toggle: (show) => set({ show: !show }),
}));
