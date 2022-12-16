import React, { Component } from "react";
import Profile from "./components/profile";
import Timer from "./components/Timer";

class App extends React.Component{
constructor(){
  super();
  this.state={
    fullname : 'Mondher Bouazzi',
    show : false 
  }

}
showProfile=()=>{
  this.setState({ show : !this.state.show })
}


render(){
  console.log(this.state.show)
  return(
    
  <div>
  <center><p style={{fontSize:"40px",color:'blue',fontWeight:'bold'}}>{this.state.fullname}</p></center>
  <center><button onClick={this.showProfile}>Click</button></center>
  
  <p>{this.state.show===true &&<Profile></Profile>}</p>
  <Timer></Timer>
  </div>
  )
}
}

export default App;
