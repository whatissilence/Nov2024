
import { createContext } from 'react';
import { TodoInterface } from '../types/Todo.interface';

export const TodoContext = createContext({
  items: [] as TodoInterface[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setItems: (_p0: (prevItems: TodoInterface[]) => TodoInterface[]) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleDelete: (_id: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleComplete: (_id: string) => {},
}); // Значення за замовчуванням