
import Addtask from "./Addtask";
import { tasks } from "./todolist-data";
import TodolistTask from "./TodolistTask";

export default function Todolist() {
    const taskItems = tasks.map(x => <li>{x.title}</li>);

    return(
        <>
            <header>
                <Addtask/>
            </header>

            {taskItems}

            <TodolistTask />
        </>

    );
}