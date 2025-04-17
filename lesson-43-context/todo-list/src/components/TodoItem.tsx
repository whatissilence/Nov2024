import { ReactElement, useContext } from 'react'
import {TodoInterface } from '../types/Todo.interface.ts'
import styles from '../styles/TodoItem.module.css'
import { LuNotepadText } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { TodoContext } from '../contexts/TodoContext.ts'

function TodoItem({ id, title, completed } : TodoInterface) : ReactElement {
  const { handleComplete, handleDelete } = useContext(TodoContext);
  const onComplete = (): void => {
    handleComplete(id);
  }

  const onDelete = (): void => {
    handleDelete(id);
  }

  return (
    <div className={styles.todo}>
      <div>
        {id}
        <LuNotepadText className={styles.todoNote} />
      </div>

      <div className={completed ? styles.crossed : ''}>{title}</div>
      <div>
        { !completed && <FaRegCircleCheck
          className={styles.todoCheck}
          onClick={onComplete}
        />}
        {
          completed && <MdDeleteOutline
          className={styles.todoCheck}
          onClick={onDelete}
        />
        }
      </div>
    </div>
  )
}

export default TodoItem