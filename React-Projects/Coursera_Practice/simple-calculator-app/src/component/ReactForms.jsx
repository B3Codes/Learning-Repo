import React from "react"
import { useRef } from "react";

// Two Type of components: Controlled components & Uncontrolled components



function ReactForms() {

  // Uncontrolled Inputs
// Uncontrolled inputs are like standard HTML form inputs:
const emailRef = useRef(null);
const passwordRef = useRef(null);

const handleSubmitUC = (event) => {
  event.preventDefault();
  const inputValue = emailRef.current.value;
  console.log(inputValue);
  const passValue = passwordRef.current.value;
  console.log(passValue);
  
}

  return (<>
  *** FORM using Uncontrolled Inputs ***<br/>
  using Ref
  <form onSubmit={handleSubmitUC} style={{padding:"48px",display:"flex", flexDirection:"column", gap:"10px", width:"420px"}}>
    <input ref={emailRef} type="text" placeholder="Email"/><br/>
    <input ref={passwordRef} type="password" placeholder="Password" />
    <button type="submit" >Submit</button>
  </form>
  </>
  );
}

export default ReactForms;