import React, {useReducer} from 'react';
import './App.css';

// Define the initial state
const initialState = {isOn: false};


// Craete the reducer function 
function reducer(state, action) {
  switch (action.type) {
    case "Toggle":
      // toogle the boolean value
      return {isOn: !state.isOn}
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}



function App() {
  // use useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Button is {state.isOn ? 'ON' : 'OFF'}</h2>
      <button
        onClick={() => dispatch({type:"Toggle"})}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: state.isOn ? 'green' : 'red',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}

      >
        {state.isOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
}

export default App;
