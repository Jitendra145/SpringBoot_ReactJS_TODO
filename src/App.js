import React, { Component } from 'react';
//import FirstComponent from './components/learning-examples/FirstComponent';
//import SecondComponent from './components/learning-examples/SecondComponent';
//import ThirdComponent from './components/learning-examples/ThirdComponent';
//import CounterButton from './components/counter/Counter';
import Counter from './components/counter/Counter'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
      return (
        <div className="App">        
          <Counter/>      
        </div>
      );
  }
}

class LearningComponents extends Component {
	/*render(){
		return (
        <div className="LearningComponents">          
		  
        </div>
      );
	}*/
}
export default App;
