import { configureStore } from "@reduxjs/toolkit";

import productDialogReducer from "./productDialogSlice";
// import cartReducer from "./cart-slice";

const store = configureStore({
  reducer: {
    detailsDialog: productDialogReducer,
    // cart: cartReducer,
  },
});

export default store;
