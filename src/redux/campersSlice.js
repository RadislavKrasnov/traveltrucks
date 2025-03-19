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
  page: 1,
  total: 0,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    incrementPage: state => {
      state.page += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        const payload = action.payload;
        state.loading = false;

        if (state.page == 1) {
          state.items = payload.items;
        } else {
          state.items = [...state.items, ...payload.items];
        }

        state.total = payload.total;
        state.error = null;
      })
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const selectCampers = state => state.campers.items;
export const selectTotal = state => state.campers.total;
export const selectPage = state => state.campers.page;

export const { incrementPage } = campersSlice.actions;
export default campersSlice.reducer;
