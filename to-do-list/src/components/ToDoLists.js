import React from "react";
import '../App.css';

export default function ToDoLists({list, handleDeleteItem}){
    let toDoListPage;
    if(list.length > 0){
      return(
        toDoListPage = ( 
          list.map((toDo,index) => {
            return (
            <div key={index} className = "toDoList"> 
            {index + 1} - {toDo}
            <button onClick= {() => handleDeleteItem(toDo)}> X </button>
            </div>
            )
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