import React from 'react'
import { Todo } from '../model'
import { SingleTodo } from './SingleTodo'
import './styles.css'

interface TodoListProps {
  todos: Todo[]
  // setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  handleDone: (id: number) => void
  handleDelete: (id: number) => void
  updateTodo: (todo: Todo) => void
}

export const TodoList = ({
  todos,
  handleDone,
  handleDelete,
  updateTodo,
}: TodoListProps) => {
  return (
    <div className="todos">
      {todos.map(todo => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          handleDone={handleDone}
          handleDelete={handleDelete}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  )
}
