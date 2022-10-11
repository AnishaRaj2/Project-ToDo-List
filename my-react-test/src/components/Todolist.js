
import { useState } from "react";
import Addtask from "./Addtask";
import Button from "./Button";
import { tasks } from "./todolist-data";
import TodolistTask from "./TodolistTask";



export default function Todolist() {
    const taskItems = tasks.map(x => <li>{x.title}</li>);

const [click, setClick] = useState(tasks);
const handleClick = (props) => {
    setClick(click.push(props.value))
 }  

    return(
        <>
            <header>
                <Addtask/>
                <Button handleClick = {handleClick}  />
            </header>

            {taskItems}

            <TodolistTask />
        </>

    );
}