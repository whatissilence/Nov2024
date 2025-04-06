import { useState } from 'react'

type RandomColoredButtonProps = {
  text: string
}

const RandomColoredButton = ({ text } : RandomColoredButtonProps) => {
  const [bgColor, setBgColor] = useState('#ffffff');

  function randomIntFromInterval(min: number, max: number): number { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function handleClick() {
    const red: number = randomIntFromInterval(0, 255);
    const green: number = randomIntFromInterval(0, 255);
    const blue: number = randomIntFromInterval(0, 255);

    const colorText: string = '#'
      + red.toString(16).padStart(2, '0')
      + green.toString(16).padStart(2, '0')
      + blue.toString(16).padStart(2, '0');

    setBgColor(colorText);
  }

  return (
    <button onClick={handleClick} style={{backgroundColor: bgColor}} >{text}</button>
  );
}

export default RandomColoredButton;