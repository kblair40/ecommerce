import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // items: [{id: ..., quantity: 0}],
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      let { id } = action.payload;
      console.log("PRODUCT ID", id);

      let productInCart = state.items.find((item) => item.id === id);
      if (productInCart) {
        productInCart["quantity"]++;
      } else {
        state.items.push({ id, quantity: 1 });
      }
      state.totalQuantity++;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
