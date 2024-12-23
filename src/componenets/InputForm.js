import React, { useContext, useState } from "react";
import "./projects.css"
import { ToDoContext } from "./ToDoProvider";


function InputForm(){
const [InputValue, setInputValue]=useState("")
const {toDos,setToDos}=useContext(ToDoContext);

function HandleValueChange(event){
    setInputValue(event.target.value)

}


function handleSubmit(e){
    setToDos((prev) => [...prev, {toDo:InputValue}])
    setInputValue("")
 console.log(e.target)
  }



    return(
        <div>
        
        <div style={{ width:"100%",height:"671px",background:"#8a4aea",display:"flex"}}>
            <div className="input-add-li">
                <h1>Get Thing Done!</h1>
                
            <input onChange={HandleValueChange} id="todo-input" className="ToDo-button" type="text" placeholder="What is the task today?"></input>
            <button onClick={handleSubmit} id="todo-but" className="Add-but">Add</button>
            </div>
        </div>

        

        </div>
        
    )
}

export default InputForm;