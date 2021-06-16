import { configureStore } from "@reduxjs/toolkit";

import productDialogReducer from "./productDialogSlice";

const store = configureStore({
  reducer: {
    detailsDialog: productDialogReducer,
  },
});

export default store;
