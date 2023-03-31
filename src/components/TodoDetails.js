

import { useEffect, useState } from "react";
import { useTodoContext } from "../hooks/useTodoContext";

const TodoDetails = ({ item }) => {
  const { todo, dispatch } = useTodoContext();
  const [content, setContent] = useState(item.text)

  //console.log('TodoDetails item idlerinin kontrolü',item.id)
  //console.log('todo details idsi:', item.id, 've completed durumu', item.completed)

  const handleDelete = () => {
    //console.log("delete edilmesi istenen item id", item.id);
    dispatch({ type: "DELETE_TODO", payload: { id: item.id } });
  };

  const handleCheck = () => {
    //console.log('ÖNCE:check durumu değiştirilmesi istenen item id', item.id, 've completed durumu', item.completed)
    dispatch({ type: "COMPLETE_TODO", payload: { id: item.id } });
  };

  //loglamak için gerekliydi.
  // useEffect(() => {
  //   console.log('SONRA:check durumu değiştirilmesi istenen item id', item.id, 've completed durumu', item.completed);
  // }, [item.completed]);

  const handleInputBlur = () => {

    //console.log('blur out edilen inputun id değeri', item.id)
    dispatch( {type: "UPDATE_TODO", payload: { text: content, id:item.id}})
  }
  return (
    <div className={`itemContainer ${item.completed ? "checked" : "unchecked"}`}>
      <input
      className="checkbox"
        type="checkbox"
        checked={item.completed}
        //defaultChecked={ item.completed }
        onChange={handleCheck}
      />
      <input 
      className="listItemText"
      value={content}
      onChange={(e) => setContent(e.target.value) }
      onBlur={handleInputBlur}
      />
      <button className="destroy" onClick={handleDelete}>
        x
      </button>
    </div>
  );
};

export default TodoDetails;
