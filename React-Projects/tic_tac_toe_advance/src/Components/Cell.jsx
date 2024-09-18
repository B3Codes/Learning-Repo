import React from "react";
import './TicTacToe.css'
import cross_icon from '../Assest/cross.png'
import circle_icon from '../Assest/circle.png'

/**
 * Cell component renders an individual cell in the Tic Tac Toe board.
 * Uses memoization to prevent unnecessary re-renders.
 * 
 * Use React.memo to optimize the Cell component and prevent it from re-rendering unnecessarily.
 * Cell components should only re-render when their value or className changes.
 * 
 * 
 * Why This is Important:
    - In React, every time the state or props change in a component, the component and its children re-render. - Memoization ensures that components only re-render when there is an actual change, improving           performance, especially in larger applications.


 */

const Cell = ({value, onClick, className}) => {
  console.log('Rendering cell');
  return (
    <div className={`box ${className}`} onClick={onClick}>
      {value && <img src={value === 'X' ? cross_icon : circle_icon} alt={value} />}
    </div>
  );
};



export default React.memo(Cell);