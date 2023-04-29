import { create } from 'zustand';

const useAuth = create<{
  login: () => void;
  logout: () => void;
  logined: boolean;
}>()((set) => ({
  login: () => set({ logined: true }),
  logout: () => set({ logined: false }),
  logined: false,
}));

export default useAuth;
