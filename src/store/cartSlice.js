import { createSlice } from "@reduxjs/toolkit";
import { setMenuOrder } from "../utils/helpers";

const defaultMenuOptions = [1, 2, 3, 4, 5];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    subtotal: 0,
    chosenSize: undefined,
    hasError: false,
  },
  reducers: {
    setSize(state, action) {
      state.chosenSize = action.payload.chosenSize;
    },
    addToCart(state, action) {
      let newItem = action.payload;
      let currentItems = state.items.slice();

      let productIndex = currentItems.findIndex(
        (item) => item.id === newItem.id
      );

      // if this product already exists in cart...
      if (productIndex !== -1) {
        currentItems[productIndex].quantity++;
        currentItems[productIndex].menuOptions = setMenuOrder(
          currentItems[productIndex].quantity
        );
      } else {
        currentItems.push({
          ...newItem,
          menuOptions: defaultMenuOptions,
          quantity: 1,
        });
        state.items = currentItems;
      }
      state.totalQuantity++;
      state.subtotal += newItem.price;
    },
    updateQty(state, action) {
      let { id, newQty, price } = action.payload;
      let selectedItem = state.items.find((item) => item.id === id);
      let quantityChange = newQty - selectedItem.quantity;
      state.subtotal += quantityChange * price;

      let updatedItems = state.items.map((item) => {
        if (item.id === id) {
          item.quantity = newQty;
        }
        return item;
      });

      state.items = updatedItems;
      state.totalQuantity += quantityChange;
    },
    removeFromCart(state, action) {
      const { id, price } = action.payload;

      let qtyChange;
      let updatedItems = state.items.filter((item) => {
        if (item.id === id) {
          qtyChange = item.quantity;
          return false;
        }
        return true;
      });

      state.items = updatedItems;
      state.totalQuantity -= qtyChange;
      state.subtotal -= qtyChange * price;
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.subtotal = 0;
    },

    setError(state) {
      state.hasError = true;
    },
    removeError(state) {
      state.hasError = false;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
