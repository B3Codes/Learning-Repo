import React, {useState} from 'react'

 
function Home() {
  const [inputTxt, setInputTxt] = useState('');
  const [sentiment, setSentiment] = useState('');
  

  const analyzeSentiment  = async (text) => {
    // console.log("text: ", text);
    const response = await fetch('http://localhost:5000/api/analyzeSentiment', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({text}),
    });
    console.log("response: ", response);
    return await response.json();
  }

  const handleInputChange = (e) => {
    setInputTxt(e.target.value)
  }

  const handleSubmit = async () => {
    const res = await analyzeSentiment(inputTxt);
    console.log('res: ', res);
    
    // Find the object with the heightest score
    const topSentiment = res.reduce((prev, current) => 
      prev.score > current.score ? prev : current,
    )

    console.log('topSentiment: ', topSentiment);
    setSentiment(`${topSentiment.label} (${(topSentiment.score * 100).toFixed(2)}%)`);
    // setSentiment(res);
  }


  
  return (
    <div className='section'>
      <h1>Home</h1>
      <input 
        type="text" 
        id="input" 
        value={inputTxt}
        placeholder="Enter text here"
        onChange={handleInputChange} />
      <button 
        type='submit' 
        id='submitBtn'
        onClick={handleSubmit}
        >Submit</button>

      <p id="displaySentiment">{sentiment}</p>
    </div>
  )
} 

export default Home