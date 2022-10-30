import React from "react";

export default function Todo({setTodos, todos, todo, text}){

    const deletHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

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
            <button className="edit-button"><i className="fas fa-pen"/></button>
            <button onClick={doneHandler} className="done-button"><i className="fas fa-check"/></button>
            <button onClick={deletHandler} className="delet-button"><i className="fas fa-trash"/></button>

        </div>
    );
}