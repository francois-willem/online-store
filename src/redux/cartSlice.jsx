import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Stores items added to the cart
    totalAmount: 0, // Total cost of items
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, colour } = action.payload;
      const existingItem = state.items.find((item) => item.id === id && item.colour === colour);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, title, price, colour, quantity: 1 });
      }

      state.totalAmount += price;
    },
    removeFromCart: (state, action) => {
      const { id, colour } = action.payload;
      const existingItem = state.items.find((item) => item.id === id && item.colour === colour);

      if (existingItem) {
        state.totalAmount -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== id || item.colour !== colour);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
