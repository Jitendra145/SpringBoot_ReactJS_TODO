import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {  

  //Define the initial state in constructor
  //state  ->conuter = 0
  constructor(){
    super();
    this.state = {
      counter : 0
    }
    this.increment = this.increment.bind(this);
  }
  render(){
    //const style = {fontSize:"50px", padding: "15px 30 px"};
    return (
      <div className="counter">
        <button onClick={this.increment}>+1</button>	
		<span className="count">{this.state.counter}</span>
      </div>
    );
  }

  increment(){//update state counter++
    console.log('increment');
    //this.state.counter++;
    this.setState({
      counter :this.state.counter + 1
    });
  }
  
}


export default Counter