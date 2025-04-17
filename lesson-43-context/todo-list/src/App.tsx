import './App.css'
import TodoList from './components/TodoList.tsx'
import TodoForm from './components/TodoForm.tsx'
import TodoContextProvider from './components/TodoContextProvider.tsx'

function App() {

  return (
    <TodoContextProvider>
      <TodoForm />
      <TodoList />
    </TodoContextProvider>
  )
}

export default App
