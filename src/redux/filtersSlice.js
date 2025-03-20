import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.data = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export const selectFilters = state => state.filters.data;
export default filtersSlice.reducer;
