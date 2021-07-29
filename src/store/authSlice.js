import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    isLoggedIn: Boolean(localStorage.getItem("token")),
    displayName: localStorage.getItem("displayName"),
    snackbarOpen: false,
    expTime: localStorage.getItem("expirationTime"),
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.displayName = action.payload.displayName;
      state.expTime = action.payload.expTime;

      localStorage.setItem("token", state.token);
      localStorage.setItem("displayName", state.displayName);
      localStorage.setItem("expirationTime", action.payload.expTime);
    },
    logout(state) {
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("token");
      localStorage.removeItem("displayName");
      localStorage.removeItem("expirationTime");
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
