import React, { useRef } from 'react'
import './styles.css'

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void
}

// const InputField = ({ todo, setTodo }: Props) => {
const InputField: React.FC<Props> = ({
  todo,
  setTodo,
  handleAdd,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form
      className="input"
      onSubmit={e => {
        handleAdd(e)
        inputRef.current?.blur()
      }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={event => setTodo(event.target.value)}
      />
      <button className="input__submit">Go</button>
    </form>
  )
}

export default InputField
