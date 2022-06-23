import React, { useState, useRef, useEffect } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { Todo } from '../model'
import './styles.css'
type TodoProps = {
  todo: Todo
  todos: Todo[]
  // setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  handleDone: (id: number) => void
  handleDelete: (id: number) => void
  updateTodo: (todo: Todo) => void
}

export const SingleTodo = ({
  todo,
  todos,
  handleDone,
  handleDelete,
  updateTodo,
}: TodoProps) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  const handleSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    const editedTodo = { id, todo: editTodo, isDone: false }
    updateTodo(editedTodo)
    setEdit(false)
  }
  return (
    <form
      className="todos__single"
      onSubmit={e => handleSubmit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={e => setEditTodo(e.target.value)}
          className="todos__single-text"
        />
      ) : todo.isDone ? (
        <s className="todos__single-text">{todo.todo}</s>
      ) : (
        <span className="todos__single-text">{todo.todo}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit)
            }
          }}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  )
}
