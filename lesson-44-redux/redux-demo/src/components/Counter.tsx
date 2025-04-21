import { useDispatch, useSelector } from 'react-redux'
import { selectCount } from '../redux/selectors.ts'
import { decrement, increment, incrementAsync, setCounter } from '../redux/actions.ts'
import { useRef } from 'react'
import { AppDispatch } from '../redux/types.ts'

const Counter = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const count = useSelector(selectCount);
  const dispatch = useDispatch<AppDispatch>();

  const handleClickPlus = () => {
    dispatch(increment());
  }

  const handleClickMinus = () => {
    dispatch(decrement());
  }


  const handleSetClick = () => {
    const inputValue = inputRef.current ? inputRef.current.value : '';
    const num: number = parseInt(inputValue);
    if (!isNaN(num)) {
      dispatch(setCounter(num));
    }
  }

  const handleSetFromRequest = () => {
    dispatch(incrementAsync());
  }

  return (
    <div>
      <div>Counter {count}</div>
      <button onClick={handleClickPlus}>+</button>
      <button onClick={handleClickMinus}>-</button>
      <div>
        <input type="number" ref={inputRef} />
        <button onClick={handleSetClick}>Set</button>
      </div>
      <div>
        <button onClick={handleSetFromRequest}>Set from Request</button>
      </div>
    </div>
  )
}

export default Counter;