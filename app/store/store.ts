import {configureStore} from '@reduxjs/toolkit';

// Slices
import paymentsSlice from './paymentsSlice';
import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    // payments: paymentsSlice,
    user: userSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({immutableCheck: false, serializableCheck: false}),
});

export type RootState = ReturnType<typeof store.getState>;
