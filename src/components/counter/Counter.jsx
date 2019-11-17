import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component{

  constructor(){
    super();
    this.state = {
      counter : 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  render(){
      return (//passing the increment method to child (CounterButton)
        <div className="Counter">        
          <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>                     
          <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
          <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
          <span className="count"><b>{this.state.counter}</b></span>
          <div><button className="reset" onClick={this.reset}>Reset</button></div>
        </div>
      );
  }

  reset(){
    this.setState({
      counter : 0
    });
  }
  increment(by){   
    console.log(`Increment from Parent - ${by}`); 
      this.setState(
        (prevState) => {
          return {counter :prevState.counter + by }
        }
      );
  }
  decrement(by){
    this.setState({
      counter : this.state.counter - by
    });
  }
}
class CounterButton extends Component {  

  //Define the initial state in constructor
  //state  ->counter = 0
  constructor(){
    super();
    this.state = {
      counter : 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  render(){
    //const style = {fontSize:"50px", padding: "15px 30 px"};
    return (
      <div className="counter">
        <button onClick={this.increment}>+{this.props.by}</button>	
        <button onClick={this.decrement}>-{this.props.by}</button>	
		   { /*<span className="count">{this.state.counter}</span>*/}
      </div>
    );
  }
  decrement(){
    this.props.decrementMethod(this.props.by);
  }
  increment(){       
    this.setState({
      counter :this.state.counter + this.props.by
    });
    this.props.incrementMethod(this.props.by);
  }
}

CounterButton.defaultProps = {
  by : 1
} 
CounterButton.propTypes = {
  by : PropTypes.number
}
export default Counter
