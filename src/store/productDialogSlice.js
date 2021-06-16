import { createSlice } from "@reduxjs/toolkit";

const productDialogSlice = createSlice({
  name: "detailsDialog",
  initialState: {
    showing: false,
  },
  reducers: {
    showDialog(state) {
      console.log("SHOW DIALOG");
      state.showing = true;
    },
    hideDialog(state) {
      console.log("HIDE DIALOG");
      state.showing = false;
    },
  },
});

export const productDialogActions = productDialogSlice.actions;

export default productDialogSlice.reducer;
