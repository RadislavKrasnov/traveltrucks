import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

const fetchCampers = createAsyncThunk(
  'campers/fetch',
  async (filters = {}, thunkAPI) => {
    try {
      const response = await axios.get('campers', {
        params: filters,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { fetchCampers };
