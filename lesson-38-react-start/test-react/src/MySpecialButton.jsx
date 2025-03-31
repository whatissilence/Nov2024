import { useState } from 'react'
import './MySpecialButton.css'

function MySpecialButton({start, diff, text, children, onClick}) {
  const [count, setCount] = useState(start);


  const onButtonClick = () => {
    setCount(count + diff);
    onClick && onClick(`From button: ${text} ${count}`);
  }

  return (
    <button className='my-button' onClick={onButtonClick}>
      {children} {text} {count}
    </button>
  )
}

// const props = {
//   start: 0,
//   diff: 10,
//   text: 'Me first!',
//   children: ' Some text ',
// };

export default MySpecialButton
