import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export const selectFilters = state => state.filters;
export default filtersSlice.reducer;
