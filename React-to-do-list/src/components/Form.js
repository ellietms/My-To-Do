import React from "react"

export default function Form({inputValue, handleInputValue, handleSubmitForm, test}){
    return (
    <div>
        <form action="/my-to-do-lists/" method="POST">
            <label htmlFor="to-do-list"  name="to-do-list">To do list</label>
            <div>
            <input 
            name="toDoList"
            type="text"
            placeholder="what to do?"
            value = {inputValue}
            onChange={(event) => handleInputValue(event)}/>
            <button type="submit">submit</button>
            </div>
        </form>
    </div>
    )
}


