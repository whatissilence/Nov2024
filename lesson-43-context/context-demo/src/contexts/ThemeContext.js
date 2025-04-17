import { createContext } from 'react';

export const ThemeContext = createContext({
  bg: 'lightgreen',
  textCl: 'black',
  setColor: () => {
    console.error('Provider required!!!');
  }
}); // Значення за замовчуванням