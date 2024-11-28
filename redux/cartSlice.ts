import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItemType } from '@/types/type';

interface CartState {
  items: CartItemType[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemType>) => {
      const item = action.payload;
      const existingItemIndex = state.items.findIndex((i) => i.id === item.id);

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
        const itemId = action.payload;
        state.items = state.items.filter((item) => item.id !== itemId);
      },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
