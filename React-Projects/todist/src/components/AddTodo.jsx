import React, { useState } from 'react'

const AddTODO = ({onAddTodo}) => {
  const [text, setText] = useState('');   // create a state for the input

  // Hanlde form submission
  const handleSubmit = (e) => {
    e.preventDefault();   // prevent default form submission behaviour (page reload)

    // validate and prevent empty todos
    if(text.trim() === '') return;

    // call parent component to add teh todo
    onAddTodo(text);

    // clear the I/P filed after adding
    setText('');
  }
  return (
    <form >
      <input type='text' 
      placeholder='Enter a new todo'
      value={text}
      onChange={(e) => setText(e.target.value)}   // update i/p state with every keystroke
      />
      
      <button type='submit'>Add Todo</button>
    </form>
  )
}

export default AddTODO