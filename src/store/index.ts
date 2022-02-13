import { configureStore } from '@reduxjs/toolkit';
import { api } from './apiUtils/api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  devTools: true,
  // eslint-disable-next-line unicorn/prefer-spread
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
