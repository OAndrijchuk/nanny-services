import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isModalOpen: false,
  isContactModalOpen: false,
};
export const authSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    closeModal: state => {
      state.isModalOpen = false;
      state.isContactModalOpen = false;
      document.body.style.overflow = '';
    },
    openModal: state => {
      state.isModalOpen = true;
    },
    openContactModal: state => {
      state.isContactModalOpen = true;
    },
  },
  extraReducers: builder => {
    builder;
  },
});

export const globalReducer = authSlice.reducer;
export const { closeModal, openModal, openContactModal } = authSlice.actions;
