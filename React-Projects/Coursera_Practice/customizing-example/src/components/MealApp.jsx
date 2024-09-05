import React from "react";
import MealCounter from "./MealCounter";
import MealList from "./MealList";
import MealsProvider from "./MealsProvider";

function MealApp(){
  return(
    <div>
      {/* Meal App. */}

      <MealsProvider>
        <MealList />
        <MealCounter />
      </MealsProvider>
      
      
    </div>
  );
}

export default MealApp;