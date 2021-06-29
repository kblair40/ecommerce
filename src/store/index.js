import { configureStore } from "@reduxjs/toolkit";

import productDialogReducer from "./productDialogSlice";
import modeReducer from "./modeSlice";
import cartReducer from "./cartSlice";
import addressFormReducer from "./addressFormSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    detailsDialog: productDialogReducer,
    mode: modeReducer,
    cart: cartReducer,
    addressForm: addressFormReducer,
    auth: authReducer,
  },
});

export default store;
