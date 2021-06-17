import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "mode",
  initialState: {
    mode: "light",
  },
  reducers: {
    toggleMode(state) {
      if (state.mode === "light") {
        state.mode = "dark";
      } else {
        state.mode = "light";
      }
    },
  },
});

export const modeActions = modeSlice.actions;

export default modeSlice.reducer;
