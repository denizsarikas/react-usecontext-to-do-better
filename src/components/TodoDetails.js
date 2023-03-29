import React from 'react'
import { useTodoContext } from "../hooks/useTodoContext";

const TodoDetails = ( {item}) => {
    //console.log(item.id)
  return (
    <div>
      <label>{item.text}</label>
    </div>
  )
}

export default TodoDetails