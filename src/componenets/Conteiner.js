import React, { useContext, useState } from "react";
import "./projects.css"
import { ToDoContext } from "./ToDoProvider";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Conteiner (){
const{toDos, setToDos}=useContext(ToDoContext)
const [checked,setChecked]=useState(false);

function CheckboxLine(e,item){
 let checked=item.checked;
 item.checked= !checked;
 setChecked(item.checked);
      
}






function Edit(item){
let promptValue=prompt("Edit your text")

const mapToDo=toDos.map((elem)=> elem.id==item.id ? {...elem, toDo:promptValue} : elem)
setToDos(mapToDo)
}
    function Remove(item){
        const filterToDo= toDos.filter((toDo) => toDo.id !== item.id)
        setToDos(filterToDo)
        console.log(item.id)
    }

return(
        <ul>

{toDos.map((item) => {

    return(
        
<li><input onChange={(e)=>CheckboxLine(e,item)} id={item.id} type="checkbox"/> <p className={item.checked ? "toDoCompleted" : "toDoNotCompleted"}>{item.toDo}</p>
<FontAwesomeIcon onClick={()=>Edit(item)} className="editIcon" icon={faPenToSquare} /> 
<FontAwesomeIcon onClick={()=>Remove(item)}  className="removeIcon" icon={faTrash} />
</li>
    
        
    )
})}


        </ul>
     

        
    )
}

export default Conteiner