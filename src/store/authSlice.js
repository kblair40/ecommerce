import { createSlice } from "@reduxjs/toolkit";

const initalToken = localStorage.getItem("token");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    isLoggedIn: Boolean(localStorage.getItem("token")),
    displayName: localStorage.getItem("displayName"),
    snackbarOpen: false,
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.displayName = action.payload.displayName;
      localStorage.setItem("token", state.token);
      localStorage.setItem("displayName", state.displayName);
    },
    logout(state) {
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("token");
      localStorage.removeItem("displayName");
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
