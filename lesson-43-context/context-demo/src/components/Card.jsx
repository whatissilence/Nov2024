import Item from './Item.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext.js'

const Card = () => {
  const { textCl } = useContext(ThemeContext);

  return (
    <div>
      Card
      <Item />
      <div className={'square'} style={{backgroundColor: textCl}}> </div>

    </div>
  )
}

export default Card