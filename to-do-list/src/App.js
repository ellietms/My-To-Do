import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import ToDoLists from "./components/ToDoLists";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [newToDo, setNewToDo] = useState(["print the papers"]);
  // const [test,setTest] =useState()

  useEffect(() => {
     fetch('/my-to-do-lists' , {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(result => setNewToDo([...newToDo, result["todos"].map(data => data.name)[0]]))
  },[])
  
const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log("HERE", ...newToDo);
    setNewToDo([...newToDo, inputValue]);
  };

  const handleDeleteItem = (index) => {
    let updatedList = [...newToDo.slice(0,index),...newToDo.slice(index+1)]
    setNewToDo(updatedList);
  };
  console.log("NEW", newToDo);
  return (
    <div className="App">
      <Form
        inputValue={inputValue}
        handleInputValue={handleInputValue}
        handleSubmitForm={handleSubmitForm}
        // test = {test}
      />
      <ToDoLists list={newToDo} handleDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
