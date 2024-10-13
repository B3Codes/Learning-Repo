import React from 'react'

// Recieve the allGoals array (passed from the App) to render each goal  as a list item.
function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map((goal) => (
        <li key ={goal.goal}>
          <span>My goal is {goal.goal}, by {goal.by}</span>
        </li>
      ))}
    </ul>
  );
};

export default ListOfGoals