import React from 'react';
import {useReducer} from 'react';
import './App.css';


// 1. Define the initial state
const initialState =  {count:0};

// 2.Create Reducer function

const reducer = (state, action) => {
  switch(action.type){
    case "Increment":
      return {count: state.count + 1};
    case "Decrement":
      return {count: state.count - 1};
    case "Reset":
      return {count: 0};
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
} 

function App() {
  // 3. use the useReducer Hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({type:"Increment"})}>Increment</button>
      <button onClick={() => dispatch({type:'Decrement'})}>Decrement</button>
      <button onClick={() => dispatch({type:'Reset'})}>Reset</button>

    </div>
  );
}

export default App;
