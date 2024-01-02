/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Increments the value by 1
    increment(state) {
      state.value++;
    },
    // Decrements the value by 1
    decrement(state) {
      state.value--;
    },
    // Increment the value based on provided input
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

/* Types */
export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
}

// Export actions from the slice
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
