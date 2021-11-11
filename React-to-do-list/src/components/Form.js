import React from "react";

export default function Form({ inputValue, handleInputValue }) {
  return (
    <div>
      <form className="form_container" action="/my-to-do-lists/" method="POST">
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
