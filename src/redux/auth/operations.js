import { createAsyncThunk } from '@reduxjs/toolkit';
import { logOut, signIn, signUp } from '../API/auth';
import { closeModal } from '../Global/globalSlice';
import { toast } from 'react-toastify';

export const logIn = createAsyncThunk(
  'fetch/logIn',
  async (credentials, thunkAPI) => {
    try {
      const user = await signIn(credentials);
      thunkAPI.dispatch(closeModal());
      return user;
    } catch (error) {
      toast.error(error.code);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registration = createAsyncThunk(
  'fetch/registration',
  async (credentials, thunkAPI) => {
    try {
      const user = await signUp(credentials);
      thunkAPI.dispatch(closeModal());
      return user;
    } catch (error) {
      toast.error(error.code);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getOut = createAsyncThunk('fetch/logOut', async (_, thunkAPI) => {
  try {
    await logOut();
    thunkAPI.dispatch(closeModal());
    return {};
  } catch (error) {
    toast.error(error.code);
    return thunkAPI.rejectWithValue(error.message);
  }
});
