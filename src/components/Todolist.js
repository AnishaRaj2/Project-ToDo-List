
import { useState, useEffect } from "react";
import Addtask from "./Addtask";
import Button from "./Button";
import { tasks } from "./todolist-data";
import TodolistTask from "./TodolistTask";


export default function Todolist() {

    const [statevalue, setStateValue] = useState("");        
    
    useEffect(() => {
        const text = localStorage.getItem("text");
    
            if (text!==null){
                setStateValue(text)
            }         
            // json && setStateValue(JSON.parse(json));
    },[]);
    
    // to display updated value on page title.
    useEffect(() => {
        document.title=statevalue
    })
    
    const handleChange = function (event){        
        const newAddTask = event.target.value;
        setStateValue(newAddTask);
        try{
            // const json = JSON.stringify(newAddTask);
            console.log(statevalue)
            localStorage.setItem("text", newAddTask);
        } catch (error) {
                console.error("Could not save text", error);
            }        
    };
        
    
    const [currentTasks, setCurrentTasks] = useState(tasks);
    const taskItems = currentTasks.map(task =>  <TodolistTask task={task}/> );

    const handleClick = () => {
        const newTask={title:statevalue, id:currentTasks.length+1}
        const newTasks=[newTask, ...currentTasks]
        console.log(newTasks);
        setCurrentTasks(newTasks)
        try{
            // const json = JSON.stringify(newAddTask);
            //console.log(statevalue)
            localStorage.setItem("tasks", newTasks);
        } catch (error) {
                console.error("Could not save tasks", error);
            }  
    }  

    return(
        <>
            <header>
                <Addtask value={statevalue} onChange = {handleChange} />
                <Button handleClick = {handleClick} />
            </header>

            {taskItems}

           
        </>
    );
}