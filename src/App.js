
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {

  return (
    <div className="App">
      <div>Header</div>
      <div>Enter your todo headline</div>
      {/* Todo input field Below */}
      <TodoInput />
      {/* Todo List Below */}
      <TodoList />
      <div>footer</div>
    </div>
  );
}

export default App;
