import { create } from 'zustand';

interface UserStore {
  loading: boolean;
  setLoading: (status: boolean) => void;
}
export const useUserStore = create<UserStore>((set) => ({
  loading: false,
  setLoading: (status) => set({ loading: status })
}));
