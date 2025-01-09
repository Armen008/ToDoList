import React, { Children, createContext, useEffect, useState } from "react";
 export const ToDoContext=createContext();
export function ToDoProvider({children}){

    const [toDos, setToDos]=useState(null)

const [loadMore, setLoadMore]= useState(3);
const[page, setPage]= useState(1)

useEffect(()=>{
    fetch("https://dummyjson.com/todos")
    .then((Response)=> Response.json())
    .then((jsondata)=> { setToDos(jsondata.todos?.slice(0, page * loadMore))})
}, [page])









    return(
        <ToDoContext.Provider value={{toDos,setToDos,loadMore,setLoadMore,page,setPage}}>
            {children}
        </ToDoContext.Provider>
    )
}