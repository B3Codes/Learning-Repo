import React, { useState } from 'react'
import GoalForm from './components/GoalForm'
import ListOfGoals from './components/ListOfGoals'



function App() {

  const [allGoals, setAllGoals] = useState([]);
const addGoal = (goal) => {
  setAllGoals([...allGoals,goal]);
};

  return (
    <div>
      
      <GoalForm onAdd = {addGoal}/>
      <ListOfGoals allGoals={allGoals}/>
    </div>
  )
}

export default App