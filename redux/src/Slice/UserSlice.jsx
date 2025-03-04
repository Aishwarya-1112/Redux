import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0, // State must be correctly initialized
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1; // Correct way to mutate state using Immer
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0; // Added a reset action (optional)
    },
  },
});

// Export actions
export const { increment, decrement, reset } = counterSlice.actions;

// Export reducer
export default counterSlice;
