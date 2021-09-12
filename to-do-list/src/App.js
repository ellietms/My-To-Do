import './App.css';
import {useState} from "react";
import Form from './components/Form';
import ToDoLists from './components/ToDoLists'

function App() {

  const [inputValue,setInputValue] = useState("")
  const [newToDo,setNewToDo] = useState(["print the papers"])

  const handleInputValue = (event) => {
    setInputValue(event.target.value)
  }
  const handleSubmitForm = (event) => {
      console.log("HERE",...newToDo)
      setNewToDo([...newToDo, inputValue])
      event.preventDefault()
  }
  console.log("NEW",newToDo)
  return (
    <div className="App">
        <Form
        inputValue = {inputValue}
        handleInputValue = {handleInputValue}
        handleSubmitForm = {handleSubmitForm}
         />
         <ToDoLists 
         list = {newToDo} />
    </div>
  );
}

export default App;
