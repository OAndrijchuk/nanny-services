import { createSlice } from '@reduxjs/toolkit';
import { getAllNannies } from './operations';

const initialState = {
  nannies: [],
  filterNannies: [],
  isLoading: false,
  isModalOpen: false,
  isContactModalOpen: false,
  isMobileMenuOpen: false,
};
export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    closeModal: state => {
      state.isModalOpen = false;
      state.isContactModalOpen = false;
      document.body.style.overflow = '';
    },
    setNannies: (state, { payload }) => {
      state.nannies = payload;
    },
    setFilterNannies: (state, { payload }) => {
      state.filterNannies = payload;
    },
    openModal: state => {
      state.isModalOpen = true;
    },
    openContactModal: state => {
      state.isContactModalOpen = true;
    },
    openMobileMenu: (state, { payload }) => {
      state.isMobileMenuOpen = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllNannies.fulfilled, (state, { payload }) => {
        state.nannies = payload;
        state.isLoading = false;
      })
      .addCase(getAllNannies.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllNannies.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const globalReducer = globalSlice.reducer;
export const {
  closeModal,
  openModal,
  openContactModal,
  setNannies,
  setFilterNannies,
  openMobileMenu,
} = globalSlice.actions;
