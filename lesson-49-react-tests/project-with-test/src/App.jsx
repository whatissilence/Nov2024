import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import PostList from './components/PostList.jsx'
import ExampleForm from './components/ExampleForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <ExampleForm />
      </div>
      <div>
        <PostList />
      </div>
    </>
  )
}

export default App
