import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext.js'
import { LangContext } from '../contexts/LangContext.js'


const Item = () => {
  const { textCl, bg, setColor } = useContext(ThemeContext);
  const lang = useContext(LangContext);

  return (
    <div>
      Item<br />
      <button
        onClick={setColor}
        style={{
        color: textCl,
        backgroundColor: bg,
      }} >
        {lang === 'Ua' ? 'Натисни Мене!': 'Click Me!'} {lang}
      </button>
    </div>
  )
}

export default Item