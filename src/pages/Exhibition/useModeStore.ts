import { create } from 'zustand';

export const modes = ['point', 'square', 'line', 'textBox', 'comment'] as const;
export type Mode = (typeof modes)[number];

const useModeStore = create<{
  type: Mode;
  setType: (type: Mode) => void;
}>()((set) => ({
  type: 'point',
  setType: (type) => set({ type }),
}));

export default useModeStore;
