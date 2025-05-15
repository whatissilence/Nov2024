import { Outlet, useNavigate } from 'react-router'
import { useState } from 'react'

const Contacts = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  document.title = 'Contacts';

  const handleClick = () => {
    const inputToNumberResult = Number(input);

    if(Number.isNaN(inputToNumberResult)) {
      // redirect to  Home
      navigate('/');
    } else {
      // redirect to product with ID
      navigate(`/products/${inputToNumberResult}`);
    }
  }

    throw new Error('AAAAAA! PANIC! ');

  return (
    <div>
      <h1>Contacts</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleClick}>Click Me</button>
      <Outlet />
    </div>
  )
}

export default Contacts