import {React, useState, useEffect} from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?result=1")
    .then(response => response.json())
    .then(data =>{ 
      console.log(data);
      setUser(data)});
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    Object.keys(user).length > 0 ? (
      <div>
        <h1>Data returned</h1>
        <h2>First Name: {user.results[0].name.first}</h2>
      </div>
    ) : (
      <h1>Data pending...</h1>
    )
  );
}

export default App;
