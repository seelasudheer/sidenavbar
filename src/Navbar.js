import React,{ Component } from "react";
import './Navbar.css'
import Home from './Home'
import About from './About'
import Clients from './Clients';
import Contacts from './Contacts';

class Navbar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        value:"home"
      };
    }
  
    updateCount() {
      this.setState(prevState =>({
        count: prevState.count + 1 
      }))
    }
    closeNav=()=>{
        console.log("something");
        document.getElementById("mySidenav").style.width = "0";
    }
    openNav=()=>{
        document.getElementById("mySidenav").style.width = "250px";
    }

    compareTo(str){
        console.log(str,"strtrtrt");
        this.setState({
            value:str
        })
    }
    render() {
      return (
        <div className="row">
        <div className="col-6">
       <div id="mySidenav" className="sidenav">
          hii
          <a href="#!"className="closebtn" onClick={()=>this.closeNav()}>&times;</a>
        {/* <Link className="closebtn" onChange={()=>this.closeNav()}>&times;</Link> */}
        <h4  onClick={()=>this.compareTo("home")}>Home</h4>
        <h4  onClick={()=>this.compareTo("about")}>About</h4>
        <h4  onClick={()=>this.compareTo("clients")}>Clients</h4>
        <h4  onClick={()=>this.compareTo("contacts")}>Contact</h4>
      </div>
        <h2 >Animated Sidenav Example</h2>
         <p>Click on the element below to open the side navigation menu.</p>
         <span style={{fontSize:"30px",cursor:"pointer"}} onClick={()=>this.openNav()}>&#9776; open</span>
      </div>
      <div className="col-6">
            {this.state.value==="home"?<Home/>:this.state.value==="about"?<About/>:this.state.value==="clients"?
            <Clients/>:this.state.value==="contacts"?<Contacts/>:<></>}
                       </div>
       </div>
              
              );
    }
  }
  
 export default Navbar