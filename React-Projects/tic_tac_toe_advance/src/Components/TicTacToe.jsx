import React from "react";
import './TicTacToe.css'
import Cell from "./Cell";
import useBoardState from "../Hooks/useBoardState";

/**
 * TicTacToe Game Component
 * Renders the Tic Tac Toe board, handles user interactions and game logic.
 */

const TicTacToe = () => {
  
// Destructuring board state and functions from custom hook

const {board, isXTurn, winner, winningCells, handleClick, resetgame} =  useBoardState();


  return (
    <div className="tic-tac-toe">
      <h1>{winner ? (winner === 'Draw!' ? "It's a Draw!" : `${winner} wins!`) : `Player ${isXTurn ? 'X' : 'O'}'s turn`}</h1>
      <div className="board">
        {board.map((cellValue, index) => (
          <Cell
            key={index}
            value={cellValue}
            onClick={() => handleClick(index)}
            className = {winningCells.includes(index)?'winning-cell':''}
            
          />
        ))}
      </div>
      <button className="resetBtn" onClick={resetgame}>Reset</button>
    </div>
  ); 
}

export default TicTacToe;