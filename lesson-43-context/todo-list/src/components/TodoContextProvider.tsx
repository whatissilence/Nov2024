import { ReactNode, useEffect, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext.ts'
import { TodoInterface } from '../types/Todo.interface.ts'
import todosFromApi from '../api/todosResult.ts'


const TodoContextProvider = ({children} : { children: ReactNode}) => {
  const [items, setItems] = useState<TodoInterface[]>([]);

  useEffect(() => {
    setItems(todosFromApi);
  }, [])

  const handleDelete = (id: string): void => {
    const newItems: TodoInterface[] = items.filter((item: TodoInterface) :boolean => item.id !== id);
    setItems(newItems);
  }

  const handleComplete = (id: string): void => {
    const newItems: TodoInterface[] = items.map((item: TodoInterface): TodoInterface => {
      if (item.id === id) {
        item.completed = true;
      }
      return item;
    });
    setItems(newItems);
  }

  return (
    <TodoContext.Provider value={{
      items,
      setItems,
      handleDelete,
      handleComplete
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider