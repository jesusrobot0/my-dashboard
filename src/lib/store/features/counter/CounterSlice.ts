import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterSlice {
  count: number;
  isReady: boolean;
}

const initialState: CounterSlice = {
  count: 0,
  isReady: false,
};

const CounterSlice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return;

      state.count = action.payload;
      state.isReady = true;
    },

    addOne(state) {
      state.count++;
    },

    substractOne(state) {
      if (state.count === 0) return;
      state.count--;
    },

    resetCount(state, action: PayloadAction<number>) {
      if (action.payload < 0) action.payload = 0;
      state.count = action.payload;
    },
  },
});

export const { addOne, substractOne, resetCount, initCounterState } =
  CounterSlice.actions;

export default CounterSlice.reducer;
