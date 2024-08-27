import logo from './logo.svg';
import './App.css';
import NavBar from './components/Nav';
import Promo from './components/Promo';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';
import Heading from './components/Heading';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';


function AlertButton({message, children}){
  return (
    <button onClick={() => {alert(message)}}>
      {children}
    </button>
  );
};


function App() {
  return (
    <div>
    <NavBar />
    <Heading style={{backgroundColor:'grey', textAlign:'center'}}>
      Everything below is defined in parent!
    <h4>Any name other than Bob</h4>
    <h5>This is jack</h5>
    <br/>
    </Heading>
    <Promo />
    <br/>
    <h1>Task: Add three Card elements</h1>
    <Card h2 = "First card's h2" h3 = "First card's h3"/>
    <Card h2 = "Second card's h2" h3 = "Second card's h3"/>
    <Card h2 = "Third card's h2" h3 = "Third card's h3"/>


    <br/>


    <br />

    <br/>

{/* defined the handleClick function and then passed it as a prop to Button */}

<div className='card' style={{background:"tomato"}}>
    <strong style={{color:"yellow", textAlign:"justify"}}>defined the handleClick function and then passed it as a prop to Button</strong>
    <br/>
{/* <button className='btn-primary' onClick={function handleClick(){
  alert('Button clicked!');
}}>
  Click Me!
</button> */}


<button onClick={() => {alert(`Button Clicked! \n <B>using an arrow function</B>`)}}>
  Click Me 2!
</button>
    </div>

    <br/>
    

    // Reading props in event handlers.

    <div className='card' style={{justifyContent:"center", justifyItems:"center"}}>
      <strong>Reading props in event handlers.</strong>
      <br/>
      <div>
        <AlertButton message="Playing Movie!" >
          Play Movie!                     {/* children */}
        </AlertButton>
        <br/>
        <br />
        <AlertButton message="uploading">
          Upload Image                    {/* children */}
        </AlertButton>
      </div>
    </div>

    <br/>



    // Passing event handlers as props.

    <div className='card' style={{justifyContent:"center", justifyItems:"center"}}>
      <strong>Passing event handlers as props.</strong>
      <br/>
      <div>
        <PlayButton movieName="Kiki's Delivery Service" >
          Play Movie!                     {/* children */}
        </PlayButton>   
        <br/>
        <br/>
        <UploadButton />
      </div>
    </div>

    <br/>

    <Intro1 />
    <Intro2 />
    <Intro3 />
    <Footer />
    </div>
  );
}


function CustomButton({onClick, children}){
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

function PlayButton({movieName}){
  function handleClick(){
    alert(`Playing ${movieName}`)
  }

  return (
    <CustomButton onClick={handleClick}>
      {movieName}
    </CustomButton>
  )
}

function UploadButton(){
  return (
    <CustomButton onClick = {() => alert("Uploading")}>
      Upload Button
    </CustomButton>
  )
}

export default App;
