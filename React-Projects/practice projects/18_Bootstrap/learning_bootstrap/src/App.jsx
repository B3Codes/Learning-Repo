
import React from 'react'
import FoodItems from './components/FoodItems'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ErrorMsg from './components/ErrorMsg'

function App() {

  /* =============== Fragment ================= */

//   return <React.Fragment>
//     <h1>Healthy Food</h1>
//     <ul class="list-group">
//   <li class="list-group-item">Dal</li>
//   <li class="list-group-item">Green Vegetables</li>
//   <li class="list-group-item">Salad</li>
//   <li class="list-group-item">Roti</li>
//   <li class="list-group-item">Milk</li>
// </ul>
//   </React.Fragment>
// return <>
//     <h1>Healthy Food</h1>
//     <ul class="list-group">
//   <li class="list-group-item">Dal</li>
//   <li class="list-group-item">Green Vegetables</li>
//   <li class="list-group-item">Salad</li>
//   <li class="list-group-item">Roti</li>
//   <li class="list-group-item">Milk</li>
// </ul>
//   </>

  /* ======================== Map =============================== */

  // let foodItems = ['Dal', 'Roti', 'Green Vegetables', 'Salad', 'Milk','Ghee'];

  // return <>
  //   <h1>Healthy Food</h1>
  //   <ul className = "list-group">
  //     {foodItems.map((item) => (
  //       <li className = "list-group-item">{item}</li>
  //     ))}
  //   </ul>
  // </>


  /* ================= Map with key ================================== */

//   return <>
//   <h1>Healthy Food</h1>
//   <ul className = "list-group">
//     {foodItems.map((item) => (
//       <li key = {item} className = "list-group-item">{item}</li>
//     ))}
//   </ul>
// </>


/* ======================== Conditional Rendering ============================= */

/*------------- - If-else statemtn-------------------------- */

// let foodItems = ['Dal', 'Roti', 'Green Vegetables', 'Salad', 'Milk','Ghee'];
// let foodItems = [/*'Dal', 'Roti', 'Green Vegetables', 'Salad', 'Milk','Ghee'*/];


// if(foodItems.length === 0){
//   return <>
//   <h3>I'm still Hungry.</h3>
//   </>
// }

// return <>
//    <h1>Healthy Food</h1>
//    <ul className = "list-group">
//      {foodItems.map((item) => (
//       <li key = {item} className = "list-group-item">{item}</li>
//     ))}
//    </ul>
//  </>


/* ------------------------- Ternary Operators -------------------------------- */

// let foodItems = ['Dal', 'Roti', 'Green Vegetables', 'Salad', 'Milk','Ghee'];
// let foodItems = [/*'Dal', 'Roti', 'Green Vegetables', 'Salad', 'Milk','Ghee'*/];
// return <>
//    <h1>Healthy Food</h1>
//    {foodItems.length == 0?<h3>I'm still Hungry.</h3>:
//    <ul className = "list-group">
//      {foodItems.map((item) => (
//       <li key = {item} className = "list-group-item">{item}</li>
//     ))}
//    </ul>
//    }
//  </>

 /* or */

//  return <>
//    <h1>Healthy Food</h1>
//    {foodItems.length == 0?<h3>I'm still Hungry.</h3>:null}
//    <ul className = "list-group">
//      {foodItems.map((item) => (
//       <li key = {item} className = "list-group-item">{item}</li>
//     ))}
//    </ul>
   
//  </>

/* or */

// let emptyMsg = foodItems.length == 0?<h3>I'm still Hungry.</h3>:null  // using varibale to store ternary condition
//  return <>
//    <h1>Healthy Food</h1>
//    {emptyMsg}
//    <ul className = "list-group">
//      {foodItems.map((item) => (
//       <li key = {item} className = "list-group-item">{item}</li>
//     ))}
//    </ul>
   
//  </>

/* ---------------------------- Logical Operators ------------------------- */

//  return <>
//    <h1>Healthy Food</h1>
//    {foodItems.length == 0 && <h3>I'm still Hungry.</h3>}
//    <ul className = "list-group">
//      {foodItems.map((item) => (
//       <li key = {item} className = "list-group-item">{item}</li>
//     ))}
//    </ul>
   
//  </>


/* =========== Passing data via props ============== */


// return <>
//    <h1>Healthy Food</h1>
//    <ErrorMsg></ErrorMsg>
//    <FoodItems></FoodItems>
   
//  </>

let foodItemList = ['Dal', 'Roti', 'Green Vegetables', 'Salad', 'Milk','Ghee'];

return <>
   <h1>Healthy Food</h1>
   <ErrorMsg items = {foodItemList}></ErrorMsg>
   <FoodItems items = {foodItemList}></FoodItems>
   
 </>




}

export default App
