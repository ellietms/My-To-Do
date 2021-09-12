import React from "react"

export default function ToDoLists({toDo}){
    let toDoListPage;
    if(toDo && toDo.length !== 0){
      return(
        toDoListPage = ( 
        toDo.map((toDo) => {
            return (<p className = "toDoList">{toDo}</p>)
        })
        )
      )
     }
      else{ 
      toDoListPage = 
      (
        "Please add something to do!"
      )  
      }
    return(
    <div>
      {toDoListPage}
    </div>
    )
}