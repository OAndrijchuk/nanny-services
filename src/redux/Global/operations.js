import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addToFavorite,
  getFavorite,
  getNannies,
  removeFromFavorite,
} from '../API/nannies';
import { setFavoritesNannies } from '../auth/authSlice';
import { toast } from 'react-toastify';

export const getAllNannies = createAsyncThunk(
  'fetch/getAllNannies',
  async (_, thunkAPI) => {
    try {
      const nannies = await getNannies();
      return nannies;
    } catch (error) {
      toast.error(error.code);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNannyToFavorites = createAsyncThunk(
  'fetch/addNannyToFavorites',
  async (credentials, thunkAPI) => {
    try {
      await addToFavorite(credentials);
      const favorites = await getFavorite(credentials.userId);
      thunkAPI.dispatch(setFavoritesNannies(favorites));
    } catch (error) {
      toast.error(error.code);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const removeNannyFromFavorites = createAsyncThunk(
  'fetch/addNannyToFavorites',
  async (credentials, thunkAPI) => {
    try {
      await removeFromFavorite(credentials);
      const favorites = await getFavorite(credentials.userId);
      thunkAPI.dispatch(setFavoritesNannies(favorites));
    } catch (error) {
      toast.error(error.code);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
