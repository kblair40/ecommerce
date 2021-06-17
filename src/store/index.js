import { configureStore } from "@reduxjs/toolkit";

import productDialogReducer from "./productDialogSlice";
import modeReducer from "./modeSlice";

const store = configureStore({
  reducer: {
    detailsDialog: productDialogReducer,
    mode: modeReducer,
  },
});

export default store;
