// import useReducer 
import {act, useReducer} from 'react'
import './App.css';

// Reducer function

function reducer(state, action){
  switch(action.type){
    case 'incremented_age': {
      return {
        name: state.name,
        age: state.age + 1
      }
    }
    case 'changed_name': {
      return{
        name: action.nextName,
        age: state.age
    }
    }
  }

  throw Error('Unknown action: ' + action.type);

}

// define initial state
const initialState = { name: 'Taylor', age: 42 };

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleBtnClick(){
    // trigger action using dispatch
    dispatch({type:'incremented_age'});
  }

  function handleInputChange(e) {
    // trigger action using dispatch
    dispatch({
      type:'changed_name',
      nextName: e.target.value
    });
  }

  return (
    <div className="App">
      <input 
        value={state.name}
        onChange={handleInputChange}
      />
      <button onClick={handleBtnClick}>
        Increment Age
      </button>
      <p>Hello, {state.name}. You're {state.age} years old!</p>
    </div>
  );
}

export default App;
