import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "mode",
  initialState: {
    mode: "light",
    snackbarOpen: false,
  },
  reducers: {
    toggleMode(state) {
      if (state.mode === "light") {
        state.mode = "dark";
      } else {
        state.mode = "light";
      }
    },
    openSnackbar(state) {
      state.snackbarOpen = true;
    },
    closeSnackbar(state) {
      state.snackbarOpen = false;
    },
  },
});

export const modeActions = modeSlice.actions;

export default modeSlice.reducer;
