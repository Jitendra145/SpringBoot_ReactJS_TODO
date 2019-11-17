import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import Counter from './components/counter/Counter'
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render(){
      return (
        <div className="App">
          <LearningComponents />
        </div>
      );
  }
}

class LearningComponents extends Component {
	render(){
		return (
        <div className="LearningComponents">          
		  <Counter/>
        </div>
      );
	}
}
export default App;
