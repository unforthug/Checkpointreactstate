import React, { Component } from "react";

class Timer extends React.Component {
constructor(){
    super();
    this.state = {
    time : 0 , 
    intervall : null
    }
}
componentDidMount() {
    this.state.intervall = setInterval(
      () => this.setState({ time : this.state.time + 1 })
      ,1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.state.intervall);
  }
render(){
    return (
        <div><center><h4>Timer : {this.state.time}</h4></center></div>
    )
}
}

export default Timer;