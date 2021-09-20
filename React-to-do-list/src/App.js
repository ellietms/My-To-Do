import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import ToDoLists from "./components/ToDoLists";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [newToDo, setNewToDo] = useState([]);

  useEffect(() => {
    fetch("/all_data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) =>
        setNewToDo(
          ...newToDo,
          result["todos"].map((data) => data.name)
        )
      )
      .then((show) => console.log(show));
  }, []);

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleDeleteItem = (index) => {
    let updatedList = [...newToDo.slice(0, index), ...newToDo.slice(index + 1)];
    setNewToDo(updatedList);
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
