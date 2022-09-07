import create from 'zustand';

type Id = {
  id: string;
  setId: (id: string) => void;
  resetId: () => void;
};
type Nav = {
  show: boolean;
  toggle: (show: boolean) => void;
};

export const useStore = create<Id>((set) => ({
  id: '',
  setId: (id) => set({ id: id }),
  resetId: () => set({ id: '' }),
}));

export const useNavStore = create<Nav>((set) => ({
  show: false,
  toggle: (show) => set({ show: !show }),
}));
