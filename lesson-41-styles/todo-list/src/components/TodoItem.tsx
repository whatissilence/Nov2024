import { ReactElement } from 'react'
import {TodoInterface } from '../types/Todo.interface.ts'
import styles from '../styles/TodoItem.module.css'
import { LuNotepadText } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";



interface TodoItemPropsInterface extends TodoInterface {
  onComplete: (id: number) => void
  onDelete: (id: number) => void
}

function TodoItem({ id, title, completed, onComplete, onDelete } : TodoItemPropsInterface) : ReactElement {

  const handleComplete = (): void => {
    onComplete(id);
  }

  const handleDelete = (): void => {
    onDelete(id);
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
          onClick={handleComplete}
        />}
        {
          completed && <MdDeleteOutline
          className={styles.todoCheck}
          onClick={handleDelete}
        />
        }

      </div>
    </div>
  )
}

export default TodoItem