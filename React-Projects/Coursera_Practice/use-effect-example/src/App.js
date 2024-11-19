import React from 'react';
import './App.css';

function App() {
  const [toggle, setToggle] = React.useState(false);

  const clickHandler = () => {
    setToggle(true);
  }
  return (
    <div className="App">
      
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
