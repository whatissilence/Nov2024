import '../css/ControlledEmail.css';
import { useRef, useState } from 'react'

export default function UncontrolledEmail() {
  const [error, setError] = useState('');
  const inputRef = useRef(null);
  const labelRef = useRef(null);

  const handleClick = () => {
    // console.log(inputRef, inputRef.current.value);
    // console.log(labelRef.current.getBoundingClientRect());

    if (!inputRef.current.value.includes('@')) {
      setError('Wrong email address');
    } else {
      setError('');
    }
  };

  return (
    <>
      <label htmlFor="uncontrolledEmailEvent" ref={labelRef}>Uncontrolled email Event: </label>
      <input name="email" id="uncontrolledEmailEvent" type="text" ref={inputRef} placeholder="Enter email" />
      <span className="error">{error}</span><br/>
      <button className="button" type="button" onClick={handleClick}>Check email</button>
    </>
  )
}