import React from "react";
import { useState, useContext, createContext } from "react";

const MealContext = createContext();   // setting using MealContext variable React.createContext() function 

const todaysMeals = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes"];  // declaring todays meals array

const MealsProvider = ({children}) => {     // children-> holds everything we wrap in meals provider Component, when it gets render in app component
  const [meals, setMeals] = useState(todaysMeals);

  return(
    <MealContext.Provider value={{meals}}>
      {children}
    </MealContext.Provider>
  )
}

export const useMealsListContext = () => useContext(MealContext);
export default MealsProvider;