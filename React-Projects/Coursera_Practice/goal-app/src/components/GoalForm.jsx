import React, { useState } from 'react'



function GoalForm(props) {

  const [formData, setFormData] = useState({goal: "", by: ""});

const changeHandler = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value});
}

const submitHandler = (e) => {
  e.preventDefault();   // prevent default form submission
  // call props.onAdd (passed from App) to add the goal to the list
  props.onAdd(formData);  
  // Reset the form data to empty string
  setFormData({goal: "", by: ""});
};

  return (
    <>
    <h2>My Goals</h2>
    <form onSubmit={submitHandler}>
      <input type='text' name = "goal" placeholder='Goal' value={formData.goal} onChange={changeHandler}/>
      <input type='text' name = "by" placeholder='By...' value={formData.by} onChange={changeHandler}/>
      <button>Submit Goal</button>
    </form>
    </>
  )
}

export default GoalForm;