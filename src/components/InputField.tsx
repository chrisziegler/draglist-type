import React from 'react'
import styles from './InputField.module.css'

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
}

// const InputField = ({ todo, setTodo }: Props) => {
const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form className={styles.input}>
      <input
        type="text"
        placeholder="Enter a task"
        className={styles.input__box}
      />
      <button className={styles.input__submit}>Go</button>
    </form>
  )
}

export default InputField
