import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    chosenSize: undefined,
  },
  reducers: {
    setSize(state, action) {
      state.chosenSize = action.payload.chosenSize;
    },
    addToCart(state, action) {
      let selectedItem = action.payload;
      console.log("SELECTED ITEM", selectedItem);

      let productInCart = state.items.find(
        (item) => item.id === selectedItem.id
      );
      if (productInCart) {
        productInCart["quantity"]++;
      } else {
        state.items.push({ ...selectedItem, quantity: 1 });
      }
      state.totalQuantity++;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
