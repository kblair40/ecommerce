import { createSlice } from "@reduxjs/toolkit";
import { setMenuOrder } from "../utils/helpers";

const defaultMenuOptions = [1, 2, 3, 4, 5];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem("cartItems")) || [],
    totalQuantity: JSON.parse(localStorage.getItem("totalQuantity")) || 0,
    subtotal: JSON.parse(localStorage.getItem("subtotal")) || 0,
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

      const newQty = state.totalQuantity + 1;
      const subtotal = state.subtotal + newItem.price;

      state.totalQuantity = newQty;
      state.subtotal = subtotal;

      localStorage.setItem("totalQuantity", newQty);
      localStorage.setItem("subtotal", subtotal);
      localStorage.setItem("cartItems", JSON.stringify(currentItems));
    },
    updateQty(state, action) {
      const { id, newQty, price } = action.payload;

      const currentItems = state.items.slice();
      const selectedItem = currentItems.find((item) => item.id === id);
      const quantityChange = newQty - selectedItem.quantity;
      const newSubtotal = state.subtotal + quantityChange * price;
      const newQuantity = state.totalQuantity + quantityChange;

      const updatedItems = currentItems.map((item) => {
        if (item.id === id) {
          item.quantity = newQty;
        }
        return item;
      });

      state.subtotal = newSubtotal;
      state.items = updatedItems;
      state.totalQuantity = newQuantity;

      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      localStorage.setItem("totalQuantity", newQuantity);
      localStorage.setItem("subtotal", newSubtotal);
    },
    removeFromCart(state, action) {
      const { id, price } = action.payload;
      const currentItems = state.items.slice();

      let qtyChange;
      let updatedItems = currentItems.filter((item) => {
        if (item.id === id) {
          qtyChange = item.quantity;
          return false;
        }
        return true;
      });

      const newQty = state.totalQuantity - qtyChange;
      const removedItemCost = qtyChange * price;
      const subtotal = state.subtotal - removedItemCost;

      state.items = updatedItems;
      state.totalQuantity = newQty;
      state.subtotal = subtotal;

      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      localStorage.setItem("totalQuantity", newQty);
      localStorage.setItem("subtotal", subtotal);
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.subtotal = 0;

      localStorage.removeItem("cartItems");
      localStorage.setItem("totalQuantity", 0);
      localStorage.setItem("subtotal", 0);
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
