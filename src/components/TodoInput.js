import {useState} from 'react'
import { useTodoContext } from "../hooks/useTodoContext";



const TodoInput = () => {

  const { todo, dispatch } = useTodoContext()
  const [itemValue, setItemValue] = useState('');

  //console.log('App.js çekilen todo değer kontrolü ->', todo)

  const handleSubmit = (e) => {

    e.preventDefault();

    const generateID = () => {
      //id: Math.floor(Math.random() * 1000) //ilk başta ID'yi random sayılar ile generate ediyorduk
      const newID = todo.length > 0 ? Math.max(...todo.map(todo => todo.id)) + 1 : 1;
      //console.log('App.js oluşturulan newID ->', newID)
      return Number(newID)
    }
  
    const newTodo = {
      id: generateID(),
      text: itemValue,
      completed: false,
    }
  
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