import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

export const fetchPage = createAsyncThunk(
  'fetch/paginaton',
  async (pageNumber, thunkAPI) => {
    try {
      //   return data[0];
    } catch (error) {
      //   toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
