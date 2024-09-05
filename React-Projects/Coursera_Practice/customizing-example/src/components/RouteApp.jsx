import '../App.css';
import RouteHomePage from './RouteHomePage';
import RouteAbout from './RouteAbout';
import RouteContact from './RouteContact';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function RouteApp(){
  return(
  <Router>
    <nav>
      <Link to="/"  className='nav-item'>Home</Link>
      <Link to="/RouteAbout" className='nav-item'>About</Link>
      <Link to="/RouteContact" className='nav-item'>Contact</Link>
    </nav>

    
      <Routes>
        <Route path="/" element = {<RouteHomePage />}/>
        <Route path='/RouteAbout' element = {<RouteAbout />}/>
        <Route path='/RouteContact' element = {<RouteContact />} />
      </Routes>
    

   
  </Router>);
}

export default RouteApp;