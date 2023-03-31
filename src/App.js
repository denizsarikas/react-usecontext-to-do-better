

import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer'
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <TodoInput />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
