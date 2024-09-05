import React from "react";
import { useState } from "react";
import Fruits from './Fruits'
import FruitsCounter from './FruitsCounter';


function FruitsApp(){
  const [fruits] = useState([
    {fruitName: 'apple', id: 1},
    {fruitName:'mango', id: 2},
    {fruitName: 'plum', id: 3},
    {fruitName: 'banana', id: 4},
  ]);

  return(
    <div className="App">
      <Fruits fruits = {fruits} />
      <FruitsCounter fruits = {fruits} />
    </div>
  )
}

export default FruitsApp;