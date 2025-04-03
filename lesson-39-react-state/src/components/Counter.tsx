import { useState } from 'react';
import CounterButton from './CounterButton.tsx'

export default function Counter() {
  const [cnt, setCnt] = useState(12);

  const handleRaise = (): void => {
    setCnt((prevState) => {
      return prevState + 1;
    });
  }

  return (
    <>
      <div className={'counter'}>
        <strong>{cnt}</strong>
      </div>
      <CounterButton increment={handleRaise} text={'Click me'} ></CounterButton>
      <CounterButton count={cnt} increment={handleRaise} text={'Or me'}  ></CounterButton>
      <CounterButton count={cnt} increment={handleRaise} text={'Something'}  ></CounterButton>
      <CounterButton count={cnt} increment={handleRaise} text={'Push me'} ></CounterButton>
    </>
  )
}