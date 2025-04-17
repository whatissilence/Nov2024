import './App.css'
import {useState } from 'react'
import Parent from './components/Parent.jsx'
import { ThemeContext } from './contexts/ThemeContext.js'
import { LangContext } from './contexts/LangContext.js'


function App() {
  const [background, setBackground] = useState('lightsalmon');
  const [textColor, setTextColor] = useState('darkred');
  const [lan, setLan] = useState('En');

  const handleChangeBg = () => {
    setBackground(background === 'lightsalmon' ? 'darkmagenta' : 'lightsalmon');
  }

  const handleChangeTextColor = () => {
    setTextColor(textColor === 'darkred' ? 'lightcoral' : 'darkred');
  }

  const handleLanguage = () => {
    setLan(lan === 'En' ? 'Ua' : 'En');
  }

  return (
    <>
      <button onClick={handleChangeBg}>Change background: {background}</button><br />
      <button onClick={handleChangeTextColor}>Change text color: {textColor}</button><br />
      <button onClick={handleLanguage}>Change language color: {lan}</button><br />
      <LangContext.Provider value={lan}>
        <ThemeContext.Provider value={{
          bg: background,
          textCl: textColor,
          setColor: handleChangeTextColor
        }}>
          <Parent />
        </ThemeContext.Provider>
      </LangContext.Provider>
    </>
  )
}

export default App
