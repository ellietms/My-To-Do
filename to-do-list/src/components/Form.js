import React from "react"

export default function Form({value, toDoList, handleSubmitForm}){
    return (
    <div>
        <form onSubmit={handleSubmitForm}>
            <label htmlFor="to-do-list">To do list</label>
            <div>
            <input name="to-do-list"
            type="text"
            placeholder="what to do?"
            value = {value}
            onChange={(event) => toDoList(event)}/>
            <button type="submit">submit</button>
            </div>
        </form>
    </div>
    )
}


