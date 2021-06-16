import { createSlice } from "@reduxjs/toolkit";

const productDialogSlice = createSlice({
  name: "detailsDialog",
  initialState: {
    showing: false,
    activeProduct: {},
  },
  reducers: {
    showDialog(state, action) {
      console.log("PAYLOAD RECEIVED:", action.payload);
      state.showing = true;
      state.activeProduct = { ...action.payload };
    },
    hideDialog(state) {
      console.log("HIDE DIALOG");
      state.showing = false;
    },
  },
});

export const productDialogActions = productDialogSlice.actions;

export default productDialogSlice.reducer;
