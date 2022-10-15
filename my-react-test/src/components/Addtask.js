import React, { useState, useEffect } from 'react';

export default function Addtask (props) {

    return (
        <>
            <input 
                type="text" 
                className="addtask"
                placeholder="Add new task"
                onChange={props.onChange}
                value={props.value}
            /> 
            <p>{props.value}</p>            
        </>
    );
}






// export default function Addtask (props) {
//     const [statevalue, setStateValue] = useState("");
    

//     useEffect(() => {
//         const text = localStorage.getItem("text");

//         if (text!==null){
//             setStateValue(text)
//         }         
//         // json && setStateValue(JSON.parse(json));
//     }, []);


// // to display updated value on page title.
//     useEffect(() => {
//         document.title=statevalue
//     })

//     const handleChange = function (event){        
//         const newAddTask = event.target.value;
//         setStateValue(newAddTask);
//         try{
//             // const json = JSON.stringify(newAddTask);
//             console.log(statevalue)
//             localStorage.setItem("text", newAddTask);
//         } catch (error) {
//             console.error(
//                 "Could not save text", error);
//         }        
//     };
    
//         return (
//             <>
//             <input 
//                 type="text" 
//                 className="addtask"
//                 placeholder="Add new task"
//                 onChange={handleChange}
//                 value={statevalue}
//             /> 
//             <p>{statevalue}</p>            
//             </>
//         );
//     }





    // export default function Addtask (props) {
    //     const [addTask, setAddTask] = useState("");
    
    //     const handleChange = function (event){
    //         setAddTask(event.target.value);
    //     };
        
    //         return (
    //             <>
    //             <input 
    //                 type="text" 
    //                 className="addtask"
    //                 placeholder="Add new task"
    //                 onChange={handleChange}
    //                 value={addTask}
    //             /> 
    
    //             <p>{addTask}</p>            
                    
    //             </>
    //         );
    //     }




// export default function Addtask () {
    
//     return (
//         <form className="addtask">
//             <input type="text" placeholder="Add new task"/> 
//             <Button />
//             </form> 
//     );
// }