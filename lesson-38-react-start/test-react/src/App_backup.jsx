import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

let myName = 'John Doe';

function App() {
  let [count, setCount] = useState(0);
  const [hiClass, setHiClass] = useState('');

  const onButtonClick = () => {
    setCount(count + 10);
  };

  const onChangeName = () => {
    myName += 'AAA';
    count += 100;
    console.log('myName', myName, count)

    if (hiClass) {
      setHiClass('');
    } else {
      setHiClass('lightened');
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onButtonClick}>
          count is =={count}==
        </button>
        <p className={hiClass}>
          Hi, My name is {myName}
          <button onClick={onChangeName}>
            Chane my Name!
          </button>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
