
import { useTodoContext } from "../hooks/useTodoContext";

//styles

//components
import TodoDetails from "../components/TodoDetails"

const TodoList = () => {
  const { todo } = useTodoContext();


  return (
<div className="home">
      <div className="blogs">
        {todo && todo.map((item) => (       
          <TodoDetails key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
