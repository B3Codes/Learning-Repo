import { useState } from 'react'
import './App.css'
import AddTODO from './components/AddTODO'
import TodoPage from './pages/TodoPage';

function App() {
  // Manage the todo list state
  const [todo, steTodo] = useState([]);

  //  Function to handle adding a new todo

  return (
    <div>
      <h1>Todo App</h1>
      <TodoPage />
    </div>
  )
}

export default App
