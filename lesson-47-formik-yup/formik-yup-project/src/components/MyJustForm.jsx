import { useState } from 'react'

const MyJustForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState('');
  const [repeatPass, setRepeatPass] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatPassError, setRepeatPassError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setUsernameError('');
    setEmailError('');
    setAgeError('');
    setPasswordError('');
    setRepeatPassError('');

    const error = validateForm();
    if (error) {
      return;
    }

    console.log('Submitting ...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Submitted!', {
      username,
      email,
      age,
      password,
      repeatPass,
    });
    resetForm();
  }

  const resetForm = () => {
    setUsername('');
    setEmail('');
    setAge(0);
    setPassword('');
    setRepeatPass('');

    setUsernameError('');
    setEmailError('');
    setAgeError('');
    setPasswordError('');
    setRepeatPassError('');
  }

  const validateForm = () => {
    let error = '';
    if (!username.trim()) {
      error = 'Username is required';
      setUsernameError(error);
      return error;
    }

    if (username.trim().length < 5) {
      error = 'Username should be at least 5 characters';
      setUsernameError(error);
      return error;
    }

    if (!email.trim()) {
      error = 'Email is required';
      setEmailError(error);
      return error;
    }

    if (!email.includes('@')) {
      error = 'Email is wrong';
      setEmailError(error);
      return error;
    }

    if(age < 18) {
      error = 'You should be 18 years old';
      setAgeError(error);
      return error;
    }

    if(password.trim().length < 8) {
      error = 'Password is required';
      setPasswordError(error);
      return error;
    }

    if(!repeatPass.trim()) {
      error = 'Repeat password is required';
      setRepeatPassError(error);
      return error;
    }

    if(password !== repeatPass) {
      error = 'Repeat password must match';
      setRepeatPassError(error);
      return error;
    }

    return error;
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="field-container">
          <label htmlFor="jUsername">Username</label>
          <input id="jUsername" type="text" value={username} onChange={e => setUsername(e.target.value)}
                 placeholder="Username"
                 className={usernameError ? 'input-error' : ''}
          />
          {usernameError && <div className="error">{usernameError}</div>}
        </div>
        <div className="field-container">
          <label htmlFor="jEmail">Email</label>
          <input id="jEmail" type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"
                 className={emailError ? 'input-error' : ''}
          />
          {emailError && <div className="error">{emailError}</div>}
        </div>
        <div className="field-container">
          <label htmlFor="jAge">Age</label>
          <input id="jAge" type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="Age"
            className={ageError ? 'input-error' : ''}
          />
          {ageError && <div className="error">{ageError}</div>}
        </div>
        <div className="field-container">
          <label htmlFor="jpassword">Password</label>
          <input id="jpassword" type="text" value={password} onChange={e => setPassword(e.target.value)}
                 placeholder="Password"
                 className={passwordError ? 'input-error' : ''}
          />
          {passwordError && <div className="error">{passwordError}</div>}
        </div>
        <div className="field-container">
          <label htmlFor="jrepeatPass">Repeat password</label>
          <input id="jrepeatPass" type="text" value={repeatPass} onChange={e => setRepeatPass(e.target.value)}
                 placeholder="Repeat password"
                 className={repeatPassError ? 'input-error' : ''}
          />
          {repeatPassError && <div className="error">{repeatPassError}</div>}
        </div>

        <button type="submit">Submit</button>

      </form>
    </div>
  )
}

export default MyJustForm