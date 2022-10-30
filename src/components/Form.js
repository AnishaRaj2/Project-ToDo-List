import React from "react";
//import Todolist from "./Todolist";


export default function Form({setInputText, inputText, setTodos, todos}) {
    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    }

    const submitTodoHandler = (event) => {
        event.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, done: false, id: Math.random() * 1000 }
        ]);
        setInputText("");
    }
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Add new task" />
            <button onClick={submitTodoHandler} type="submit" className="todo-button" >
            <i className="fas fa-plus-square"></i>
            </button>
        </form>
    );
}