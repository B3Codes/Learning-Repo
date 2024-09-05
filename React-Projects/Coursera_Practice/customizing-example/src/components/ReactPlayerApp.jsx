import React from 'react'
import ReactPlayer from 'react-player/youtube'

function ReactPlayerApp(){
  const vidUrl = "https://www.youtube.com/watch?v=ozwH49d7nOA";
  return (
    <div className='App'>
      <h1>React Player</h1>
      <ReactPlayer url={vidUrl} playing= {false} volume={0.3}/>
      </div>
  );
}

export default ReactPlayerApp;