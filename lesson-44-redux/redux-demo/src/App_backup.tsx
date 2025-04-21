import './App.css'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { Action, configureStore } from '@reduxjs/toolkit'

// Action types
enum ActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

type CounterState = {
  count: number
}

type RootState = ReturnType<typeof store.getState>;

const selectCount = (state : RootState) => state.counter.count;

// Action creators
const increment = () : Action => ({ type: ActionType.INCREMENT });
const decrement = (): Action => ({ type: ActionType.DECREMENT });

const initialState = {
  count: 0,
}

// Reducer
const counterReducer = (state: CounterState = initialState, action: Action) => {
  console.log('counterReducer', state, action);
  switch (action.type) {
    case ActionType.INCREMENT:
      return {
        count: state.count + 1,
      };
    case ActionType.DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

// Store
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})


const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleClickPlus = () => {
    dispatch(increment());
  }

  const handleClickMinus = () => {
    dispatch(decrement());
  }

  return (
    <div>
      <div>Counter {count}</div>
      <button onClick={handleClickPlus}>+</button>
      <button onClick={handleClickMinus}>-</button>
    </div>
  )
}


function App() {
  return (
    <Provider store={store}>
      App
      <div>
        <Counter />
      </div>
    </Provider>
  )
}

export default App
