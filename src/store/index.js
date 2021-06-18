import { configureStore } from "@reduxjs/toolkit";

import productDialogReducer from "./productDialogSlice";
import modeReducer from "./modeSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    detailsDialog: productDialogReducer,
    mode: modeReducer,
    cart: cartReducer,
  },
});

export default store;
