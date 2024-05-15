/* node modules */
import { createSlice } from "@reduxjs/toolkit";

/**
 * the reducer that takes care of the value of the counter. this will be controlled based on the
 * action that we are sending into the reducer
 **/
const initialState = 0;
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return state + 1;
    },
    decrement: (state) => {
      return state - 1;
    },
    reset: () => {
      return 0;
    }
  }
});

/* exports */
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
