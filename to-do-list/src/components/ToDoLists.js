import React from "react";
import '../App.css';

export default function ToDoLists({list}){
    let toDoListPage;
    if(list.length > 1){
      return(
        toDoListPage = ( 
          list.map((toDo,index) => {
            return (<p className = "toDoList">{index + 1} - {toDo}</p>)
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