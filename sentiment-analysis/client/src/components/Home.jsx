import React, {useState} from 'react'

 
function Home() {
  const [sentiment, setSentiment] = useState('');
  const submitBtn = document.getElementById('submitBtn');
  const inputText = document.getElementById('input');

  

  submitBtn.addEventListener('click', () => {
    setSentiment(inputText.value)
  }) 

  
  return (
    <div className='section'>
      <h1>Home</h1>
      <input type="text" id="input" placeholder="Enter text here"></input>
      <button type='submit' id='submitBtn'>Submit</button>
      <p id="displaySentiment">{sentiment}</p>
    </div>
  )
} 

export default Home