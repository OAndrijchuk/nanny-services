import { createSlice } from '@reduxjs/toolkit';
import { fetchPage } from './operations';

const initialState = {
  user: {
    email: '',
    username: '',
  },
  isAuth: false,
  isLoading: false,
  isRefresh: false,
  isSubscribed: false,
  error: '',
  token: '',
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPage.fulfilled, (state, { payload }) => {
        state.paginationCards = [
          ...state.paginationCards,
          ...payload.pageCards,
        ];
        state.totalCards = payload.totalCards;
        state.totalPages = payload.totalPages;
        state.isPageLoading = false;
      })
      .addCase(fetchPage.pending, state => {
        state.isPageLoading = true;
      })
      .addCase(fetchPage.rejected, state => {
        state.isPageLoading = false;
      });
  },
});

export const userReducer = authSlice.reducer;
