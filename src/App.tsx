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

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
