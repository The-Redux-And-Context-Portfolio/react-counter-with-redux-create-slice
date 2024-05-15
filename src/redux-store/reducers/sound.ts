/* node modules */
import { createSlice } from "@reduxjs/toolkit";

/**
 * the reducer that takes care of the value of the sound slice. this will be controlled based on the
 * action that we are sending into the reducer
 **/
const initialState = true;
const soundSlice = createSlice({
  name: "sound",
  initialState,
  reducers: {
    on: () => {
      return true;
    },
    off: () => {
      return false;
    }
  }
});

/* exports */
export const { on, off } = soundSlice.actions;
export default soundSlice.reducer;
