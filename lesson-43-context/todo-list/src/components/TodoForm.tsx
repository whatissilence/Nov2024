import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { TodoInterface } from '../types/Todo.interface.ts'
import { TodoContext } from '../contexts/TodoContext.ts'


const TodoForm = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { setItems } = useContext(TodoContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const newTodo: TodoInterface = {
      id: uuidv4(),
      title: inputValue,
      completed: false,
    }

    setItems((prevItems: TodoInterface[]) => {
      return [...prevItems, newTodo]
    });
    setInputValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={inputValue} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default TodoForm