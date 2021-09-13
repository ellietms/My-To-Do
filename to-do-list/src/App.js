import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import ToDoLists from "./components/ToDoLists";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [newToDo, setNewToDo] = useState(["print the papers"]);
  const [test,setTest] =useState(90)

  
    // await fetch('http://127.0.0.1:5000/test', {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({"time" : test }),
    // })
    // .then(res => res.json())
    // .then(res => console.log(res))
    // .then(data => setTest(data["time"]) )
    


  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  async function handleSubmitForm (event){
    event.preventDefault();
    console.log("HERE", ...newToDo);
    setNewToDo([...newToDo, inputValue]);
    await fetch('http://127.0.0.1:5000/test', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(res => res.json())
    .then(res => console.log("HELLOOO",res))
    .then(data => setTest(data))
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
