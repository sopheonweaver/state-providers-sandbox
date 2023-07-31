import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  counters: Record<string, number>;
}

const initialState: CounterState = { counters: {} };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counters[action.payload] = (state.counters[action.payload] ?? 0) + 1;
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
