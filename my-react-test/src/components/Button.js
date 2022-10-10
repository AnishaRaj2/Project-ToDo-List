export default function Button () {
    
    function handleAdd() {
        alert('Adding task to ToDo list');
    }    
    
    return (
        <button onClick={handleAdd}>Add</button>
    );
}