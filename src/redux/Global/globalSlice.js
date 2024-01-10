import { createSlice } from '@reduxjs/toolkit';
import nannies from '../../assets/babySitters.json';

const initialState = {
  nannies,
  filterNannies: [],
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
  },
  extraReducers: builder => {
    builder;
  },
});

export const globalReducer = authSlice.reducer;
export const {
  closeModal,
  openModal,
  openContactModal,
  setNannies,
  setFilterNannies,
} = authSlice.actions;
