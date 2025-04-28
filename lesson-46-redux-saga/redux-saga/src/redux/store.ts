import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice.ts';
import usersReducer from './usersSlice.ts';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './counterSaga.ts'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;