import { create } from 'zustand';

interface LoadingStore {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

export const useLoading = create<LoadingStore>((set) => ({
  isLoading: false,
  setIsLoading: (value) => set({ isLoading: value }),
}));
