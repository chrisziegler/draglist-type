import React, { useState, FunctionComponent } from 'react'
import InputField from './components/InputField'
import { Todo } from './model'
import { TodoList } from './components/TodoList'
import './App.css'

const App: FunctionComponent = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      const newTodo = {
        id: Math.floor(Math.random() * 10000),
        todo,
        isDone: false,
      }
      // setTodos(prevState => prevState.concat(newTodo))
      setTodos([...todos, newTodo])
      setTodo('')
    }
  }
  const setTodoIsDone = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    )
  }
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const updateTodo = (todo: Todo) => {
    setTodos(
      todos.map(t =>
        t.id === todo.id ? { ...t, todo: todo.todo } : t,
      ),
    )
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      />
      <TodoList
        todos={todos}
        handleDone={setTodoIsDone}
        handleDelete={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  )
}

export default App
