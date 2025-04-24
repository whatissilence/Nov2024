import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice.ts';
import usersReducer from './usersSlice.ts';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;