
import React from "react";

// Todo consist of list of todos and done & delet button
export default function Todo({setTodos, todos, todo, text}){

    // Delet button handler
    const deletHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    // Done button handler
    const doneHandler = () => {
        setTodos(todos.map((task) => {
            if(task.id === todo.id){
                return{
                    ...task, done: !task.done
                }
            }
            return task;
        }))
    }

    return(
        <div className="todo">
            <li className={`todo-item ${todo.done ? "done" : ""}`}>{text}</li>
            
            {/* Done button */}
            <button 
                onClick={doneHandler} 
                className="done-button">
                <i className="fas fa-check"/>
            </button>

            {/* Delet button */}
            <button 
                onClick={deletHandler} 
                className="delet-button">
                <i className="fas fa-trash"/>
            </button>

        </div>
    );
}