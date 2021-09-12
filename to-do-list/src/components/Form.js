import React from "react"

export default function Form({inputValue, handleInputValue, handleSubmitForm}){
    return (
    <div>
        <form onSubmit={(event) => handleSubmitForm(event)}>
            <label htmlFor="to-do-list">To do list</label>
            <div>
            <input name="to-do-list"
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


