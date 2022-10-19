export default function TodolistTask (props) {
    
    return (
        <form className="flex">
          
            <li>{props.task.title}</li>
        </form> 
    );
}