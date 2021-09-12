import './App.css';
import {useState} from "react";
import Form from './components/Form';
import ToDoLists from './components/ToDoLists'


function App() {
  const [toDo,setToDo] = useState([])
  const updateToDo = (event) => {
  event.preventDefault()
  setToDo(event.target.value)
  }
  console.log(toDo)
  const handleSubmitForm = (event) => {
    if(event.target.value){
      setToDo(...toDo, event.target.value);
    }
    console.log("HERE",toDo)
  }

  return (
    <div className="App">
        <Form
        value = {toDo}
        toDoList={updateToDo}
        handleSubmitForm = {handleSubmitForm}
         />
        <strong>{toDo}</strong>
        <ToDoLists
        toDoList = {toDo}
        />
    </div>
  );
}

export default App;
