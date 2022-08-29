import create from 'zustand';

type Count = {
  count: number;
  increaseCount: () => void;
  resetCount: () => void;
};

export const useStore = create<Count>((set) => ({
  count: 0,
  increaseCount: () =>
    set((state) => {
      return { count: state.count + 1 };
    }),
  resetCount: () => set({ count: 0 }),
}));
