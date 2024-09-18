import { useState } from "react";
import '../Components/TicTacToe.css'

/**
 * Custom hook to manage Tic Tac Toe board state and game logic.
 * Includes handling turns, checking for winners, and resetting the game.
 */

const useBoardState = () => {
  //  Board State: array of 9 elements initialize to null
  const [board, setBoard] = useState(Array(9).fill(null));

  // player turn: true for 'x', false for 'o'
  const [isXTurn, setIsXTurn] = useState(true);

  // State to hold the winner
  const [winner, setWinner] = useState(null);

  const [winningCells, setWinningCells] = useState([]); // Store winning cell indices


  // Winning combinations: rows, columns, and diagonals

  const winningCombinations = [
    [0,1,2], [3,4,5], [6,7,8],  //rows
    [0,3,6], [1,4,7], [2,5,8],  // colmuns
    [0,4,8], [2,4,6]  // diagonals
  ];
  
  const handleClick = (index) => {
    
    if(board[index] || winner) return;  // Prevent overwriting or continuing after game ends
  
    // copy the current bord and update tjhe clicked cell
    const newBoard = [...board];   // Clone current board
    newBoard[index] = isXTurn ? 'X' : 'O';   // Set 'X' or 'O' in the clicked cell

    const gameWinner = checkWinner(newBoard);   // check if move results in a win
  
    setBoard(newBoard);    // update the board state

  
    if(gameWinner){
      setWinner(gameWinner.winner);   // set winner
      setWinningCells(gameWinner.winningCells);  // highlights winning cells
    } else if(!newBoard.includes(null)) {
      setWinner('Draw!');     //check for draw
    } else {
    //switc turn
    setIsXTurn(!isXTurn);     // switch turn
    }
  };


  const checkWinner = (newBoard) => {
    for (let combination of winningCombinations){
      const [a,b,c] = combination;
      if(newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]){
        return {winner: newBoard[a], winningCells: combination};  // return 'X' or 'O'
      }
    }

    return null; // no winner yet
  };

  // Reset function to clear the game board and reset the state
  const resetgame = () => {
    setBoard(Array(9).fill(null));   // clear the board
    setIsXTurn(true);   //set teh turn back to 'X'
    setWinner(null);    // clear the winner state
    setWinningCells([]); // Reset winning cells

  };
    return {board, isXTurn, winner, winningCells, handleClick, resetgame};
};

export default useBoardState;