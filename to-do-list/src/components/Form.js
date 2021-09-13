import React from "react"

export default function Form({inputValue, handleInputValue, handleSubmitForm, test}){
    return (
    <div>
        {/* method="post" action="" */}
        <h1>Time is {test}</h1>
        <form action = "{{url_for('add_todo')}}" method="POST" onSubmit={(event) => handleSubmitForm(event)}>
            <label htmlFor="to-do-list"  name="to-do-list">To do list</label>
            <div>
            <input 
            name="to-do-list"
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


