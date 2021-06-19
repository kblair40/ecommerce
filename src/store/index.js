import { configureStore } from "@reduxjs/toolkit";

import productDialogReducer from "./productDialogSlice";
import modeReducer from "./modeSlice";
import cartReducer from "./cartSlice";
import addressFormReducer from "./addressFormSlice";

const store = configureStore({
  reducer: {
    detailsDialog: productDialogReducer,
    mode: modeReducer,
    cart: cartReducer,
    addressForm: addressFormReducer,
  },
});

export default store;
