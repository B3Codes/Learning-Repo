import React, {useState} from "react";


  

function ToggleText() {
  const [isVisible, setIsVisbible] = useState(false);

  function toggleText(){
    setIsVisbible((previousState) => !previousState);
  }
  return (
    <div>
      {isVisible && <p style={{color:"red"}}>This is the text that can be shown or hidden!</p>}
      <button onClick={toggleText}>
          {isVisible? 'Hide': 'Show'}Text
      </button>
      
    </div>
  );
}


export default ToggleText;