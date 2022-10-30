import './App.css';
import { useEffect, useState } from 'react';

//Importing components
import Form from './components/Form';
import Todolist from './components/Todolist';


function App() {
const [inputText, setInputText] = useState("");
const [todos, setTodos] = useState([]);

// Run once when the app start
useEffect(() => {
  getLocalTodos();
}, []);

useEffect(() => {
  saveLocalTodos()
});

// Saving data on localstorage
const saveLocalTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
}

const getLocalTodos = () => {
  if (localStorage.getItem("todos") === null) {
    localStorage.setItem("todos", JSON.stringify([]));
  } else {
    let localTodos = JSON.parse(localStorage.getItem("todos"));
    setTodos(localTodos);
  }
}

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>

      <Form 
          setInputText={setInputText} 
          inputText={inputText} 
          setTodos={setTodos} 
          todos={todos}
      />
      
      <Todolist 
          setTodos={setTodos}
          todos={todos}/> 
           
    </div>
  );
}

export default App;
