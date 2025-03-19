import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './camperOps';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        const payload = action.payload;
        
        state.loading = false;
        state.items = payload?.items ?? [];
        state.error = null;
      })
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const selectCampers = state => state.campers.items;

export default campersSlice.reducer;
