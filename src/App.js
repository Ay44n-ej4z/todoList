import './App.css';
import Todo from './components/Todo'
import InputFuntion from './components/Input'
import { useState } from 'react';
function App() {
  const [todos, setTodos] = useState([]);
  function handleClick(inputValue){
    setTodos([...todos, inputValue]);
   console.log("hello");
  }
  return (
    <div className="App">
      <InputFuntion handleClick={handleClick}/> 
      <Todo todos={todos}/>
    </div>
  );
}

export default App;
