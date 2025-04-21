import './App.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import Counter from './components/Counter.tsx'

function App() {
  return (
    <Provider store={store}>
      App
      <div>
        <Counter />
      </div>
    </Provider>
  )
}

export default App
