import React from "react";

export default function Form({ inputValue, handleInputValue, setToDo, toDO }) {
  const handleSubmit = (event) => {
    fetch("/my-to-do-lists/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event.target.value),
    })
      .then((res) => res.json())
      .then((result) => {
        setToDo([...toDO, ...result["todos"]]);
      })
      .then((show) => console.log("Todo- in post fetch", show));
  };
  return (
    <div>
      <form
        className="form_container"
        action="/my-to-do-lists/"
        method="POST"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div>
          <input
            name="toDoList"
            type="text"
            placeholder="what to do?"
            className="input_todo"
            value={inputValue}
            onChange={(event) => handleInputValue(event)}
          />
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
