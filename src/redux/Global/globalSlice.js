import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isModalOpen: false,
};
export const authSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    closeModal: state => {
      state.isModalOpen = false;
    },
    openModal: state => {
      state.isModalOpen = true;
    },
  },
  extraReducers: builder => {
    builder;
  },
});

export const globalReducer = authSlice.reducer;
export const { closeModal, openModal } = authSlice.actions;
