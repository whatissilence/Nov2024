import TodoItem from './TodoItem.tsx'
import todosFromApi from '../api/todosResult';
import { ChangeEvent, FormEvent, ReactElement, useEffect, useState } from 'react'
import { TodoInterface } from '../types/Todo.interface.ts'

console.log(todosFromApi)

function TodoList(): ReactElement {
  const [items, setItems] = useState<TodoInterface[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [nextId, setNextId] = useState<number>(0);

  useEffect(() => {
    setItems(todosFromApi);
    const ids: number[] = todosFromApi.map(item => item.id);
    const maxId: number = Math.max(...ids);
    setNextId(maxId + 1);

  }, [])

  const handleDelete = (id: number): void => {
    const newItems: TodoInterface[] = items.filter((item: TodoInterface) :boolean => item.id !== id);
    setItems(newItems);
  }

  const handleComplete = (id: number): void => {
    const newItems: TodoInterface[] = items.map((item: TodoInterface): TodoInterface => {
      if (item.id === id) {
        item.completed = true;
      }
      return item;
    });
    setItems(newItems);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const newTodo: TodoInterface = {
      id: nextId,
      title: inputValue,
      completed: false,
    }

    setItems([...items, newTodo]);

    setNextId(prevId => prevId + 1);
    setInputValue('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>

      {items.map((todo: TodoInterface): ReactElement => (
        <TodoItem key={todo.id} {...todo} onComplete={handleComplete} onDelete={handleDelete} />
      ))}

    </>
  )
}

export default TodoList