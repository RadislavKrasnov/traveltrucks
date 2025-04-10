import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperById } from './camperOps';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  camper: null,
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
    resetCampers: () => initialState,
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
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.camper = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchCamperById.rejected, handleRejected);
  },
});

export const selectCampers = state => state.campers.items;
export const selectCamper = state => state.campers.camper;
export const selectTotal = state => state.campers.total;
export const selectPage = state => state.campers.page;
export const selectError = state => state.campers.error;
export const selectLoading = state => state.campers.loading;

export const { incrementPage, resetCampers } = campersSlice.actions;
export default campersSlice.reducer;
