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
    updateQty(state, action) {
      let { id, newQty } = action.payload;
      let selectedItem = state.items.find((item) => item.id === id);
      let quantityChange = newQty - selectedItem.quantity;

      let newState = state.items.map((item) => {
        if (item.id === id) {
          item.quantity = newQty;
        }
        return item;
      });

      state.items = newState;
      state.totalQuantity += quantityChange;
    },
    // removeFromCart(state, action)
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
