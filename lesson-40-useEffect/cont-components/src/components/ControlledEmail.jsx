import '../css/ControlledEmail.css';
import { useState } from 'react'

export default function ControlledEmail() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value)
    if (!e.target.value.includes('@')) {
      setError('Wrong email address');
    } else {
      setError('');
    }
  };

  return (
    <>
      <label htmlFor="controlledEmail">Controlled email: </label>
      <input name="email" id="controlledEmail" type="text" value={email} onChange={handleChange} />
      {email.length > 8 && <div>{email}</div>}
      <div className="error">{error}</div>
    </>
  )
}