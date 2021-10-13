import React from "react";
import '../App.css';

export default function ToDoLists({list, handleDeleteItem}){
    let toDoListPage;
    if(list.length > 0){
      return(
        toDoListPage = ( 
          list.map((toDo,index) => {
            return (
            <div key={index}> 
            <div className = "toDoList"> {index + 1} - {toDo.name} 
            <button className="button" onClick= {() => {handleDeleteItem(toDo.id);window.location.reload(true)}}> Delete </button>
            </div>
            </div>
            )
        })
        )
      )
     }
     else{
      toDoListPage = 
      (
        <p>Loading ......</p>
      )  
      }

    return(
    <div>
      {toDoListPage}
    </div>
    )
}