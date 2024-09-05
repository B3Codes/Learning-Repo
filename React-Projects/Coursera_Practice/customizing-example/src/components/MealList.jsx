import React, { useState } from "react";
import { useMealsListContext } from "./MealsProvider";

// const [meals, setMeals] = useState(todaysMeals);

const MealList = () => {
  const {meals} = useMealsListContext();

  return (<div>
    <h1>Meals List using Context API</h1>
    {meals.map((meal,index) => (
      <h2 key = {index}>{meal}</h2>
    ))}
  </div>)
}


export default MealList;