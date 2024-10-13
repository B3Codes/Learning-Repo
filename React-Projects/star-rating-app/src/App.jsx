import React from 'react'
import Star from './comonents/star'
import { useState } from 'react'

function App() {
  // useState to manage rating and hover states
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  
  return (
    <div>
      <h2>Rating component

</h2>
      {[1,2,3,4,5].map((star) => (
        <Star 
          key={star}
          filled = {star <= (hover || rating)}
          onClick= {() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
        />
        
      ))}
      
    </div>
  );
};

export default App