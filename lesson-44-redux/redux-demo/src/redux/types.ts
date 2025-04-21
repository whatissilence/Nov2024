import { store } from './store.ts'
import { Action, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit'

export enum ActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  SET_COUNTER = 'SET_COUNTER',
}

export type CounterState = {
  count: number
}

export type RootState = ReturnType<typeof store.getState>;

export type AsyncCounterAction = ThunkAction<void, RootState, unknown, Action>;
export type AppDispatch = ThunkDispatch<RootState, unknown, Action>;

