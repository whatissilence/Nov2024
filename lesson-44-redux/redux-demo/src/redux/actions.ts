import { Action, PayloadAction } from '@reduxjs/toolkit'
import { ActionType, AppDispatch, AsyncCounterAction } from './types.ts'

export const increment = () : Action => ({ type: ActionType.INCREMENT });
export const decrement = (): Action => ({ type: ActionType.DECREMENT });
export const setCounter = (value: number): PayloadAction<number> => ({ type: ActionType.SET_COUNTER, payload: value });

export const incrementAsync =
  (): AsyncCounterAction => (dispatch: AppDispatch): void => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Запит не вдався: ' + response.statusText);
      }
      return response.json(); // Парсинг тіла відповіді як JSON
    })
    .then(result => {
      const ids = result.map((user: { id: number}) => user.id);
      const maxId = Math.max(...ids);
      dispatch(setCounter(maxId));
    })
    .catch(error => console.log(error));
}





{

}