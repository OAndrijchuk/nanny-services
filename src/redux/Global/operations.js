import { createAsyncThunk } from '@reduxjs/toolkit';
import { getNannies } from '../API/nannies';
// import { closeModal } from '../Global/globalSlice';
// import { toast } from 'react-toastify';

export const getAllNannies = createAsyncThunk(
  'fetch/getAllNannies',
  async (_, thunkAPI) => {
    try {
      const nannies = await getNannies();
      console.log(nannies);
      return nannies;
    } catch (error) {
      //   toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
