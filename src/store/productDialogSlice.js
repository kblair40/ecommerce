import { createSlice } from "@reduxjs/toolkit";

const productDialogSlice = createSlice({
  name: "detailsDialog",
  initialState: {
    showing: false,
    activeProduct: {},
  },
  reducers: {
    showDialog(state, action) {
      state.showing = true;
      console.log("DIALOG PAYLOAD RECEIVED:", action.payload);
      state.activeProduct = { ...action.payload };
    },
    hideDialog(state) {
      state.showing = false;
    },
  },
});

export const productDialogActions = productDialogSlice.actions;

export default productDialogSlice.reducer;
