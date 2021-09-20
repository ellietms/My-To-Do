import React from "react"

export default function Form({inputValue, handleInputValue, handleSubmitForm, test}){
    return (
    <div>
        <form action = "{{url_for('my-to-do-lists')}}" method="POST" onSubmit={(event) => handleSubmitForm(event)}>
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
        {/* <h1>{test}</h1> */}
    </div>
    )
}


