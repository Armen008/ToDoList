import React, { useContext } from "react";
import { ToDoContext } from "./ToDoProvider";
function ToDoCont(){
    const{toDo}=useContext(ToDoContext)
    return(
        <div>{toDo}</div>
        
    )
}

export default ToDoCont;