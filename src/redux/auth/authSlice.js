import { createSlice} from '@reduxjs/toolkit';


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
  },
});

export const userReducer = authSlice.reducer;