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
            <button onClick= {() => handleDeleteItem(index)}> X </button>
            </div>
            )
        })
        )
      )
     }
     else if (list.length === 0){
      toDoListPage = 
      (
        "Please add something to do!"
      )  
     }
      else{ 
      toDoListPage = 
      (
        "Loading ......"
      )  
      }

    return(
    <div>
      {toDoListPage}
    </div>
    )
}