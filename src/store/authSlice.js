import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isLoggedIn: false,
    displayName: null,
    snackbarOpen: false,
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.displayName = action.payload.displayName;
    },
    logout(state) {
      state.token = null;
      state.isLoggedIn = false;
    },
    openSnackbar(state) {
      state.snackbarOpen = true;
    },
    closeSnackbar(state) {
      state.snackbarOpen = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
