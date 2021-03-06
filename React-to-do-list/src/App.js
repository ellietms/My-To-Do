import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import ToDoLists from "./components/ToDoLists";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [toDo, setToDo] = useState([]);

  useEffect(() => {
    fetch("/my-to-do-lists/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setToDo(result["todos"]);
        // setToDo([...toDo, ...result["todos"]]);
        console.log("TODO in fetch", toDo);
      })
      .catch((error) => console.log("Error : ", error));
  }, []);

  console.log("TODO OUT fetch", toDo);

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleDeleteItem = (index) => {
    console.log("index", index);
    fetch(`/my-to-do-lists/${index}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => setToDo(result["todos"]));
  };

  return (
    <div className="App">
      <h1 className="main_label"> My To-Do</h1>
      <Form
        inputValue={inputValue}
        handleInputValue={handleInputValue}
        setToDo={setToDo}
        toDO={toDo}
      />
      {toDo && toDo.length !== 0 && (
        <ToDoLists list={toDo} handleDeleteItem={handleDeleteItem} />
      )}
    </div>
  );
}

export default App;
