import { useReducer } from 'react'
import { Todo, Actions } from './model'

const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ]
    case 'remove':
      return state.filter(todo => todo.id != action.payload)
    case 'done':
      return state.map(todo =>
        todo.id !== action.payload
          ? { ...todo, isDone: !todo.isDone }
          : todo,
      )
    default:
      return state
  }
}
export const ReducerExample = () => {
  const [state, dispatch] = useReducer(TodoReducer, [])
  return <div />
}
