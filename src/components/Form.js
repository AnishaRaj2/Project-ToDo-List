
import React from "react";

// Form consist of input field and submit/add button
export default function Form({setInputText, inputText, setTodos, todos}) {

    // Input field text handler
    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    }

    // Submit/add todo button handler
    const submitTodoHandler = (event) => {
        event.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, done: false, id: Math.random() * 1000 }
        ]);
        setInputText(""); //setting input field to blank/empty again
    }
    return(
        <form>
            <input 
                value={inputText} 
                onChange={inputTextHandler} 
                type="text" 
                className="todo-input" 
                placeholder="Add new task" 
                autoFocus
            />
            <button 
                onClick={submitTodoHandler} 
                type="submit" 
                className="todo-button">
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    );
}