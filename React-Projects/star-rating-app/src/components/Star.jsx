// import React from 'react'
import '../index.css';

// function Star({filled, onClick, onMouseEnter, onMouseLeave, size, color}) {
//   // return (
//   //   <span
//   //     className='star'
//   //     onClick={onClick}
//   //     onMouseEnter = {onMouseEnter}
//   //     onMouseLeave={onMouseLeave}
//   //     style={{ cursor: 'pointer', color: filled ? 'gold' : 'gray' }}
//   //   >★</span>
//   // )

//   /* === Customization Options:  control the number of stars, size, colors, etc. === */

//   return (
//     <span
//       className='star'
//       onClick={onClick}
//       onMouseEnter = {onMouseEnter}
//       onMouseLeave={onMouseLeave}
//       style={{ cursor: 'pointer', 
//         fontSize: size,
//         color: filled ? color.filled : color.unfilled 
//       }}
//       role = "button"
//       aria-label={`Rating star`}
//     >★</span>
//   )
// }


// function Star({star, rating, hover, setRating, setHover, handleKeyDown, size, totalStars}) {
  
//   const color = {'filled':'gold', 'unfilled': 'grey'};
//   /* === Customization Options:  control the number of stars, size, colors, etc. === */

//   return (
//     <span
//       className='star'
//       aria-checked = {rating === star}
//       tabIndex={0}
      
//       onClick={() => setRating(star)}
//       onMouseEnter = {() => setHover(star)}
//       onMouseLeave={() => setHover(0)}
//       onKeyDown={(event) => handleKeyDown(event, star)}
//       style={{ cursor: 'pointer', 
//         fontSize: size,
//         color: star <= (hover || rating) ? color.filled : color.unfilled 
//       }}
//       role = "radio"
//       aaria-label={`Rate ${star} out of ${totalStars}`} // Descriptive label for screen readers
//     >★</span>
//   )
// }

// export default Star;

/**
 * A single star component for the star rating system.
 * Optimized with React.memo to prevent unnecessary re-renders.
 */
// 

/* === Refactor the Star.js Component to Use Context === */
import React, {memo} from 'react';
import { useStarRating } from '../hooks/useStarRating';


const Star = memo(({star, size}) => {
  const {rating, hover, setRating, setHover, handleKeyDown, totalStars } = useStarRating();

  const color = {
    filled: 'gold',
    unfilled: 'gray',
  };

  const isFilled = star <= (hover || rating);

  return (
    <span
      className='star'
      role='radio'
      aria-checked = {rating === star}
      tabIndex={0}
      onClick={() => setRating(star)}
      onMouseEnter={() => setHover(star)}
      onMouseLeave={() => setHover(0)}
      onKeyDown={(event) => handleKeyDown(event, star)}
      style={{
        cursor: 'pointer',
        fontSize: size,
        color: isFilled ? color.filled : color.unfilled,
      }}
      aria-label={`Rate ${star} out of ${totalStars}`}
    >
      ★
    </span>
  )
});

export default Star;
