// // import React from 'react'
// // import Star from './components/Star'
// // import { useState } from 'react'
// // import { useStarRating } from './hooks/useStarRating';

// // function App({totalStars = 5}) {
// //   // useState to manage rating and hover states
// //   const [rating, setRating] = useState(0);
// //   const [hover, setHover] = useState(0);
  
// //   const size = "3em";
  
// // //   return (
// //     <div>
// //       <h2>Rating component

// // </h2>
// //       {[1,2,3,4,5].map((star) => (
// //         <Star 
// //           key={star}
// //           filled = {star <= (hover || rating)}
// //           onClick= {() => setRating(star)}
// //           onMouseEnter={() => setHover(star)}
// //           onMouseLeave={() => setHover(0)}
// //           size = {size}
// //           color={color}
// //         />
        
// //       ))}
      
// //     </div>
// //   );

// // /* === Keyboard Navigation === */
// // const handleKeyDown = (event, star) => {
// //   if(event.key === 'Enter') {
// //     setRating(star);
// //   } if(event.key === 'ArrowRight' && star < totalStars) {
// //     setHover(star + 1);
// //   } if(event.key === 'ArrowLeft' && star > 1) {
// //     setHover(star - 1);
// //   }
// // };

// // return(
// //   <div role='radiogroup' 
// //   aria-labelledby='rating-label'
// //   aria-live="polite" // Announces changes in the rating
// //   >
// //     <p id='rating-label'>Rate this product:</p>
// //     {[...Array(totalStars)].map((_,index) => {
// //       const star = index + 1;
// //       return( 
// //         <Star 
// //         key={star}
// //         star = {star}
// //         rating = {rating}
// //         hover = {hover}
// //         setRating = {setRating}
// //         setHover = {setHover}
// //         handleKeyDown = {handleKeyDown}
// //         />
// //       )
// //     })}
// //   </div>
// // )
// // };

// // export default App

// import React from 'react';
// import Star from './components/Star';
// import { useStarRating } from './hooks/useStarRating';

// const App = ({ totalStars = 5 }) => {
//   const size = '3em'; // Configurable star size
//   const { rating, hover, setRating, setHover, handleKeyDown } = useStarRating(totalStars);

//   return (
//     <div 
//       role="radiogroup" 
//       aria-labelledby="rating-label"
//       aria-live="polite" // Announces rating changes for screen readers
//       style={{ padding: '10px', maxWidth: '300px', margin: 'auto' }}
//     >
//       <p id="rating-label">Rate this product:</p>
//       {[...Array(totalStars)].map((_, index) => {
//         const star = index + 1;
//         return (
//           <Star
//             key={star}
//             star={star}
//             rating={rating}
//             hover={hover}
//             onSetRating={setRating}
//             onSetHover={setHover}
//             onHandleKeyDown={handleKeyDown}
//             size={size}
//             totalStars={totalStars}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default App;




/* === Use StarRatingProvider in the App Component === */
import React from 'react';
import { StarRatingProvider } from './context/StarRatingContext';
import Star from './components/Star';

const App = ({totalStars = 5}) => {
  const size = '3em';

  return (
    <StarRatingProvider totalStars={totalStars}>
      <div
        role='radiogroup'
        aria-labelledby='rating-label'
        aria-live='polite'
        style={{ padding: '10px', maxWidth: '300px', margin: 'auto' }}
      >
        <h3 id='rating-label'>Rate this product:</h3>
        {[...Array(totalStars)].map((_,index) => {
          return (<Star key = {index + 1} star = {index + 1} size = {size} />)
        })}

      </div>
    </StarRatingProvider>
  )
}

export default App;