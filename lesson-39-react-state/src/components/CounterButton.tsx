import { FC } from 'react'

interface CounterButtonProps {
  count?: number,
  increment: () => void,
  text: string,
}

const CounterButton: FC<CounterButtonProps> = (props) => {

  return (
    <button onClick={props.increment}>{props.text} {props.count}</button>
  )
}

export default CounterButton;