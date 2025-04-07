import { useInput } from '../utils.js'

export default function MyForm() {
  const username = useInput('');
  const password = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Values:', username.value, password.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/*Username: <input value={username.value} onChange={username.onChange} /><br/>*/}
      {/*Password: <input value={password.value} onChange={password.onChange} />*/}
      Username: <input {...username} /><br/>
      Password: <input {...password} />
      <button type="submit">Submit</button>
    </form>
  )
}