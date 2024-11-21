import { useContext, useState } from 'react';
import { StarRatingContext } from '../context/StarRatingContext'; // <-- Add this import


/**
 * Custom hook to manage star rating and hover state.
 */
// export const useStarRating = (totalStars) => {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   const handleKeyDown = (event, star) => {
//     if (event.key === 'Enter') {
//       setRating(star);
//     } else if (event.key === 'ArrowRight' && star < totalStars) {
//       setHover(star + 1);
//     } else if (event.key === 'ArrowLeft' && star > 1) {
//       setHover(star - 1);
//     }
//   };

//   return { rating, hover, setRating, setHover, handleKeyDown };
// };



// Custom Hook for Easy Access

export const useStarRating  = () => {
  const context = useContext(StarRatingContext);
  if(!context) {
    throw new Error('useStarRating must be used within a StarRatingProvider');  
  }

  return context;
}

