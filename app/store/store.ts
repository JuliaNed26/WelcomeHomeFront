import {configureStore} from '@reduxjs/toolkit';

// Slices
import tasksSlice from './paymentsSlice';
import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    todos: tasksSlice,
    user: userSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({immutableCheck: false, serializableCheck: false}),
});

export type RootState = ReturnType<typeof store.getState>;
