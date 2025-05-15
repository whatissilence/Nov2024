import React, { memo, useId } from 'react'
import { useInput } from '../hooks/useInput.js'


const MainTitle = memo( function ({isRedColor, handleClick}) {
  const username = useInput('');
  const secondName = useInput('');
  const a = useId();
  const userNameId = useId();
  const secondNameId = useId();
  console.log('Component MainTitle rendered', a);

  const style =  {
    color: isRedColor ? 'red' : 'green',
  };

  return (
    <>
      <h1 style={style}>Vite + React</h1>
      <button onClick={handleClick}>Click me use Callback</button>
      <div>
        <label htmlFor={userNameId}>Username</label>
        <input id={userNameId} type="text" {...username.bind}/>
        <button onClick={username.clean}>X</button>
      </div>
      <div>
        <label htmlFor={secondNameId}>Second name</label>
        <input id={secondNameId} type="text" {...secondName.bind} />
        <button onClick={secondName.clean}>X</button>
      </div>
      <div>{username.value} {secondName.value}</div>
    </>
  )
})

export default MainTitle