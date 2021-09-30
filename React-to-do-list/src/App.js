import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import ToDoLists from "./components/ToDoLists";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [newToDo, setNewToDo] = useState([]);

  useEffect(() => {
    fetch("/my-to-do-lists/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) =>
        setNewToDo(
          [...newToDo,
          ...result["todos"]]
        )
      )
      .then((show) => console.log("newTodo",show));
  }, []);


  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleDeleteItem = (index) => { 
    console.log("index",index)   
    fetch(`/my-to-do-lists/${index}` , {
      method: 'DELETE',
      headers : {      
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())  
    .then((result) => setNewToDo(result["todos"]))
  };
  console.log("NEW", newToDo);
  return (
    <div className="App">
      <h1 className="main_label"> My To-Do</h1>
      <Form
        inputValue={inputValue}
        handleInputValue={handleInputValue}
      />
      <ToDoLists list={newToDo} handleDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
