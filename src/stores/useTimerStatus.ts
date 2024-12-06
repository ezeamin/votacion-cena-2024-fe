import { create } from 'zustand';

interface TimerStatus {
  timesUp: boolean;
  setTimesUp: (value: boolean) => void;
}

export const useTimerStatus = create<TimerStatus>((set) => ({
  timesUp: false,
  setTimesUp: (value) => set({ timesUp: value }),
}));
