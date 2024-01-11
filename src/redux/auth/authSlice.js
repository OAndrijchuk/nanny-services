import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getOut, logIn, registration } from './operations';

const initialState = {
  user: {},
  isAuth: false,
  isLoading: false,
  isRefresh: false,
  error: '',
  token: '',
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getOut.fulfilled, state => {
        state.user = {};
        state.isAuth = false;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(logIn.fulfilled, registration.fulfilled),
        (state, { payload }) => {
          state.user = payload;
          state.isAuth = true;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(logIn.pending, registration.pending, getOut.pending),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(logIn.rejected, registration.rejected, getOut.rejected),
        state => {
          state.isLoading = false;
        }
      );
  },
});

export const userReducer = authSlice.reducer;
