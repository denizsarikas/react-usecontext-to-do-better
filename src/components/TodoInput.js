import {useState} from 'react'
import { useTodoContext } from "../hooks/useTodoContext";



const TodoInput = () => {

  const { todo, dispatch } = useTodoContext()
  const [itemValue, setItemValue] = useState('');

  const newTodo = {
    id: Math.floor(Math.random() * 1000),
    text: itemValue,
    completed: false,
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch( {type: "ADD_TODO", payload: newTodo})
    setItemValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
        <h3>Enter your todo</h3>
            <input
            value={itemValue}
            onChange= { (e) => {setItemValue(e.target.value)}}
            type="text"
            placeholder='enter your todo this field'
            required
             />
        <button>Add</button>
    </form>
  )
}

export default TodoInput