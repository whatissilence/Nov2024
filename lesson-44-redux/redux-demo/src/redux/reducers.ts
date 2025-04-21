import { ActionType, CounterState, SetCounterAction } from './types.ts'
import { Action } from '@reduxjs/toolkit'


const initialState = {
  count: 0,
}

export const counterReducer = (state: CounterState = initialState, action: Action | SetCounterAction) => {
  console.log('counterReducer', state, action);
  switch (action.type) {
    case ActionType.INCREMENT:
      return {
        count: state.count + 1,
      };
    case ActionType.DECREMENT:
      if (state.count === 0) {
        return state;
      }

      return {
        count: state.count - 1,
      };

    case ActionType.SET_COUNTER:
      return {
        count: (action as SetCounterAction).payload
      }
    default:
      return state;
  }
}