import React, { useRef, useState } from "react";
import "./TicTacToe.css"
import circle_icon from '../Assests/circle.png'
import cross_icon from '../Assests/cross.png'

// Creating array top track of psoitions on board
let data = ["","","","","","","","","",];

const TicTacToe = () => {
  // useState hook to update current  user
  let  [count, setCount] = useState(0);

  // to prevent toogle function execution when user wins
  // whenever user wins we will set lock true
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);

  let box1Ref = useRef(null);
  let box2Ref = useRef(null);
  let box3Ref = useRef(null);
  let box4Ref = useRef(null);
  let box5Ref = useRef(null);
  let box6Ref = useRef(null);
  let box7Ref = useRef(null);
  let box8Ref = useRef(null);
  let box9Ref = useRef(null);

  let box_array = [box1Ref, box2Ref, box3Ref, box4Ref, box5Ref, box6Ref, box7Ref, box8Ref, box9Ref];


  const reset = () => {
    setLock(false);
    titleRef.current.innerHTML = `Tic Tac Toe Game in <span> React</span>`
    data = ["","","","","","","","","",];

    box_array.map((e) => {
      e.current.innerHTML = "";
    })


  };
  

  const toggle = (e, num) => {
    // e-> event, num -> index number
    if(lock){
      return 0;
    }

    if(count % 2 === 0){
      // count varible is even current user is x
      e.target.innerHTML = `<img src = '${cross_icon}'>`;
      data[num] = "x";
      setCount(++count);
    } else {
      // count varible is odd current user is o
      e.target.innerHTML = `<img src = ${circle_icon}>`;
      data[num] = "o";
      setCount(++count);
    }

    checkWin();

  }

  const checkWin = () => {
    if(data[0] === data[1] && data[1] === data[2] && data[2] !== ""){
      won(data[2]);
    } else if(data[3] === data[4] && data[4] === data[5] && data[5] !== ""){
      won(data[5]);
    } else if(data[6] === data[7] && data[7] === data[8] && data[8] !== ""){
      won(data[8]);
    } else if(data[0] === data[3] && data[3] === data[6] && data[6] !== ""){
      won(data[6]);
    } else if(data[1] === data[4] && data[4] === data[7] && data[7] !== ""){
      won(data[7]);
    } else if(data[2] === data[5] && data[5] === data[8] && data[8] !== ""){
      won(data[8]);
    } else if(data[0] === data[4] && data[4] === data[8] && data[8] !== ""){
      won(data[8]);
    } else if(data[2] === data[4] && data[4] === data[6] && data[6] !== ""){
      won(data[6]);
    } else if(data.every(cell => cell !== "")){
      setLock(true);
      titleRef.current.innerHTML = `It's a Draw!`;
    }
  }

  const won = (winner) => {
    setLock(true);
    if(winner === 'x'){
      titleRef.current.innerHTML = `Congratulations: <img src = ${cross_icon}> wins`;
    } else{
      titleRef.current.innerHTML = `Congratulations: <img src = ${circle_icon}> wins`;
    }
    
  }
  
  return (
    <div className="container">
      <div className="title" ref={titleRef}>Tic Tac Toe Game in <span> React</span></div>
      <div className="board">
        <div className="row1">
          <div className="boxes" ref={box1Ref} onClick={(e) => {toggle(e,0)}}></div>
          <div className="boxes" ref={box2Ref} onClick={(e) => {toggle(e, 1)}}></div>
          <div className="boxes" ref={box3Ref} onClick={(e) => {toggle(e, 2)}}></div>
        </div>
        <div className="row2">
          <div className="boxes" ref={box4Ref} onClick={(e) => {toggle(e, 3)}}></div>
          <div className="boxes" ref={box5Ref} onClick={(e) => {toggle(e, 4)}}></div>
          <div className="boxes" ref={box6Ref} onClick={(e) => {toggle(e, 5)}}></div>
        </div>
        <div className="row3">
          <div className="boxes" ref={box7Ref} onClick={(e) => {toggle(e, 6)}}></div>
          <div className="boxes" ref={box8Ref} onClick={(e) => {toggle(e, 7)}}></div>
          <div className="boxes" ref={box9Ref} onClick={(e) => {toggle(e, 8)}}></div>
        </div>
      </div>
      <button className="reset" onClick={reset}>Reset</button>

    </div>
  );
}

export default TicTacToe;