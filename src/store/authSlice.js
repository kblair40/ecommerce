import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isLoggedIn: false,
    displayName: null,
  },
  reducers: {
    login(state, action) {
      console.log("PAYLOAD:", action.payload);
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.displayName = action.payload.displayName;
    },
    logout(state) {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
