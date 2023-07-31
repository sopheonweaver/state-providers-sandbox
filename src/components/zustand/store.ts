import { create } from 'zustand';

interface CounterState {
  counters: Record<string, number>;
  increment: (id: string) => void;
}

export const useCounterStore = create<CounterState>()((set) => ({
  counters: {},
  increment: (id) => set((state) => ({ counters: { ...state.counters, [id]: (state.counters[id] ?? 0) + 1 } })),
}));
