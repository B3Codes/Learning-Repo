import React, { useState } from 'react'

const peopleJson = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

const ToDo = props => (
  //cretating the table row
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
);

function TodoSimpleApp(){

  const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];


  // using map
  const listItems = peopleJson.map(person => <li>{person.name} {"=>"} <b>{person.profession}</b></li>);


  // using filter
  const chemsit = peopleJson.filter(person => person.profession === 'chemist');

  // uisng map over chemist
  const chemistListItems = chemsit.map(person => <li key={person.id}><b>{person.name}</b> {" => "} {"Profession is: " + person.profession}</li>)

  const[todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '18.00'
  },
  {
    id: 'todo2',
    createdAt: '20.00'
  }])

  
  const reverseOrder = () => {
    setTodos([...todos].reverse())
  }
  return (
    <div>
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todos) => (
            <ToDo key={todos.id} id={todos.id} createdAt= {todos.createdAt} />
          ))}
        </tbody>
      </table>

      <br/>
      <br/>
      *** Using map ***
      <ul>{listItems}</ul>
      <br/>
      <br/>
      *** Uisng filter ***<br/>
      Showing list of people with profession as chemist
      <ul>{chemistListItems}</ul>


      <br/>
      <br/>

      *** FORM using Uncontrolled Inputs ***
      
      

    </div>
  );
}

export default TodoSimpleApp;