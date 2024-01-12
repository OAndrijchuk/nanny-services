import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { userReducer } from './auth/authSlice';
import { globalReducer } from './Global/globalSlice';

const persistConfigUser = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['user', 'isAuth', 'favoritesNannies'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfigUser, userReducer),
    global: globalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);
