import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch ,Route} from 'react-router-dom';
import About from './About'
import Navbar from './Navbar';
function App() {
  return (
    <div style={{marginTop:"30px",marginLeft:"20px"}}>
       
       <Switch>
         <Route exact path='/' component={Navbar}/>
         <Route exact path='/about' component={About}/>
       </Switch>
    </div>
  );
}

export default App;
