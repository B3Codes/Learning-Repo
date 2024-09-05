import { useState } from "react";
import { Form } from "react-bootstrap";
import ToggleText from "./ToggleText";
import DynamicList from "./DynamicList";
import TextInputWithFocusButton from "./TextInputWithFocusButton";
import FruitsApp from "./FruitsApp";
import MealApp from "./MealApp";
import MealCounter from "./MealCounter";
import MealsProvider from "./MealsProvider";


export default function InputComponent(){

  const [inputText,setInputText] = useState("Hello!");

  const[form, setForm] = useState({
    firstName: '',
    lastName:'',
    email:''
  });
 
  function handleChange(e){
    setInputText(e.target.value);
  }
  return (
    <>

    <div className="card" style={{display:"flex", flexDirection:"column",gap:"10px", textAlign:"center", margin:"2em"}}>
      <h4>Implementing useState Hook</h4>
      <input value={inputText} onChange={handleChange} />
      <p>Your're Typing {inputText}</p>
      <button onClick={()=>setInputText("Hello!")}>
        Reset
      </button>
      </div>

      <div className="card" style={{display:"flex", flexDirection:"column", gap:"10px", textAlign:"center"}}>
        <h4>Registration form using useState Hook</h4>
        <label>
          First Name:
          <input
            value={form.firstName}
            onChange={e => {
              setForm({
                ...form,
                firstName:e.target.value
              });
            }}
            style={{marginLeft:"8px"}}
          />
        </label>

        <label>
          Last Name: 
          <input
            value={form.lastName}
            onChange={e => {
              setForm({
                ...form,
                lastName:e.target.value
              });
            }}
          />
        </label>

        <label>
          Email: 
          <input
            value={form.email}
            onChange={e => {
              setForm({
                ...form,
                email: e.target.value
              });
            }}  
          />
        </label>
        <p>
          {form.firstName}{' '}
          {form.lastName}{' '}
          ({form.email})
        </p>
      </div>


      <div className="card" style={{display:"flex", flexDirection:"column", gap:"10px", textAlign:"center"}}>
        <h4>Toggling Visibility of UI Elements</h4>
        <ToggleText />
        </div>


        <div className="card" style={{display:"flex", flexDirection:"column", gap:"10px", textAlign:"center"}}>
        <h4>Adding and Removing Items from a List</h4>
        <DynamicList />
        </div>

      <div className="card" style={{display:"flex", flexDirection:"column", gap:"10px",textAlign:"center"}}>
          <h4>The useRef hook</h4>  
          <p>
            <ul style={{textAlign:"left"}}>
              <li>We use the useRef hook to access a child element directly.</li>
              <li>When you invoke the useRef hook, it will return a ref object.</li>
              <li>The ref object has a property named current.</li>
            </ul>
          </p>

          <TextInputWithFocusButton/>
      </div>

      <div className="card" style={{display:"flex", flexDirection:"column", gap:"10px",textAlign:"center"}}>
      <h4>Managing state in React</h4>
            <FruitsApp/>
      </div>


      <div className="card" style={{display:"flex", flexDirection:"column", gap:"10px",textAlign:"center"}}>
        <h4>Healthy Eating App</h4>
        
        <MealApp />
      </div>


      
    </>
  );
}