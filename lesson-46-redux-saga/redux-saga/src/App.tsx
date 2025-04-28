
import './App.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import Counter from './components/Counter.tsx'
import UserList from './components/UserList.tsx'

function App() {
  return (
    <Provider store={store}>
      <Counter />

      <UserList />
    </Provider>
  )
}

export default App
