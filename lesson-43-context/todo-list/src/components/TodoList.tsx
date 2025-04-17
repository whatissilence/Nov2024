import TodoItem from './TodoItem.tsx'
import { ReactElement, useContext } from 'react'
import { TodoInterface } from '../types/Todo.interface.ts'
import { TodoContext } from '../contexts/TodoContext.ts'

function TodoList(): ReactElement {
  const { items } = useContext(TodoContext);

  return (
    <>
      {items.length
        ? items.map((todo: TodoInterface): ReactElement => (
          <TodoItem key={todo.id} {...todo} />
        ))
        : 'No Todo Items'
      }
    </>
  )
}

export default TodoList