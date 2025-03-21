import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWhishlist: (state, action) => {
      const camperId = action.payload;
      const index = state.items.findIndex(id => id === camperId);
      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(camperId);
      }
    },
  },
});

export const { toggleWhishlist } = wishlistSlice.actions;
export const selectWishlist = state => state.wishlist.items;
export default wishlistSlice.reducer;
