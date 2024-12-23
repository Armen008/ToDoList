import React, { Children, createContext, useState } from "react";
 export const ToDoContext=createContext();
export function ToDoProvider({children}){

    const [toDos, setToDos]=useState([
        {

        toDo:"wash deshes",
        id: 1,
        checked : false,
    },
    {

        toDo:"make dinner",
        id: 2,
        checked : false,
    },
    {

        toDo:"do lessons",
        id: 3,
        checked : false,
    }

])
    return(
        <ToDoContext.Provider value={{toDos,setToDos}}>
            {children}
        </ToDoContext.Provider>
    )
}