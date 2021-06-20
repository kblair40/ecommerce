import { createSlice, current } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "mode",
  initialState: {
    mode: "light",
    snackbarOpen: false,
  },
  reducers: {
    toggleMode(state) {
      console.log("toggling!");
      if (state.mode === "light") {
        state.mode = "dark";
      } else {
        state.mode = "light";
      }
    },
    openSnackbar(state) {
      state.snackbarOpen = true;
      console.log("STATE:", current(state));
    },
    closeSnackbar(state) {
      state.snackbarOpen = false;
      console.log("STATE:", current(state));
    },
  },
});

export const modeActions = modeSlice.actions;

export default modeSlice.reducer;
