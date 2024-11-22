  import React, {createContext, useState, useContext} from "react";

  // 1. Create the context
  const StarRatingContext = createContext();

  // create the Provider Component: responsible for managing and providing the state to any child components that need it.

  /*
    The StarRatingProvider will manage the rating and hover states, 
    as well as the handleKeyDown function for keyboard interactions. 
    We'll also accept a totalStars prop to define the total number of stars in the rating system.
  */

  export const StarRatingProvider = ({totalStars = 5, children}) => {
    // 2. Define the state variable
    const [rating,setRating] = useState(0);
    const [hover, setHover] = useState(0);


    // 3. Handle Keydown Events for Accessibility
    const handleKeyDown = (event, star) => {
      if (event.key === 'Enter') {
        setRating(star); // Set rating on Enter
      } else if (event.key === 'ArrowRight' && star < totalStars) {
        setHover(star + 1); // Navigate right
      } else if (event.key === 'ArrowLeft' && star > 1) {
        setHover(star - 1); // Navigate left
      }
    };


    return(
      // 4. Provide state to children via context
      <StarRatingContext.Provider
        value={{
          rating,
          hover,
          setRating,
          setHover,
          handleKeyDown,
          totalStars
        }}
      >
        {children}
      </StarRatingContext.Provider>
    )

  }
