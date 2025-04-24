import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, add, incrementAsync } from '../redux/counterSlice.ts'
import { counterSelector } from '../redux/selectors.ts'
import { AppDispatch } from '../redux/store.ts'

const Counter = () => {
  const count: number = useSelector(counterSelector);
  const dispatch = useDispatch<AppDispatch>();

  const handleInc = () => {
    dispatch(increment())
  }

  const handleDec = () => {
    dispatch(decrement())
  }

  const handleAdd = () => {
    dispatch(add(10))
  }

  const handleAddAsync = () => {
    dispatch(incrementAsync(35))
  }

  return (
    <div>
      Counter: {count}
      <div>
        <button onClick={handleInc} >Inc</button>
        <button onClick={handleDec} >Dec</button>
        <button onClick={handleAdd} >Add 10</button>
        <button onClick={handleAddAsync} >Add 10 Async</button>
      </div>

    </div>
  )
}

export default Counter