import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import ToDoLists from "./components/ToDoLists";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [newToDo, setNewToDo] = useState(["print the papers"]);
  const [test,setTest] =useState(90)

  
const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

async function handleSubmitForm (event){
    event.preventDefault();
    console.log("HERE", ...newToDo);
    setNewToDo([...newToDo, inputValue]);
    fetch('http://0.0.0.0:8080/test', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(res => res.json())
    .then(result => console.log("HELLOOO RESULT",result))
    .then(data => setTest(data))
    .catch(error => console.log("REQUESTED FAILED", "ERROR :", error))
  };

  const handleDeleteItem = (item) => {
    let updatedList = newToDo.filter((toDoItem) => toDoItem !== item);
    setNewToDo(updatedList);
  };
  console.log("NEW", newToDo);
  return (
    <div className="App">
      <Form
        inputValue={inputValue}
        handleInputValue={handleInputValue}
        handleSubmitForm={handleSubmitForm}
        test = {test}
      />
      <ToDoLists list={newToDo} handleDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
