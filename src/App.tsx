import React, { useState } from 'react'
import InputField from './components/InputField'
import { Todo } from './model'
import './App.css'

const App: React.FC = () => {
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
      {todos.map(t => (
        <li key={t.id}>{t.todo}</li>
      ))}
    </div>
  )
}

export default App
