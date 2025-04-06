import { useState } from 'react'
import './App.css'
import ColoredButton from './components/ColoredButton';
import RandomColoredButton from './components/RandomColoredButton';

function App() {
  const [inputText, setInputText] = useState('#ffffff');
  const [color, setColor] = useState('#ffffff');

  function handleColorChange() {
    setColor(inputText);
  }

  return (
    <>

      <h1>Hi there</h1>
      <div className="card">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <p>
          <ColoredButton text={'Change my color'} bgColor={color} onClick={handleColorChange} />
          <RandomColoredButton text={'Click me so I can change my color'} />
        </p>
      </div>
    </>
  )
}

export default App
