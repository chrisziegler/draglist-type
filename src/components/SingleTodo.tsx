import React from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { Todo } from '../model'
import './styles.css'
type TodoProps = {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const SingleTodo: React.FunctionComponent<TodoProps> = ({
  todo,
  todos,
  setTodos,
}) => {
  return (
    <form className="todos__single">
      <span className="todos__single-text">{todo.todo}</span>
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon">
          <MdDone />
        </span>
      </div>
    </form>
  )
}
