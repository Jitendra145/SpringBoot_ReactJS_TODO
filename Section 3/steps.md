### Step 02 Creating Basic React Counter Component

### Step 03 Adding a Button and a counter to React Counter Component
 In JSX, all the html element should in small case. But custom element can use the initial capital letter.
 ```
 Counter.jsx
 import React, { Component } from 'react';
import './Counter.css';

function Counter() {  
    return (
      <div className="counter">
        <button>+1</button>	
		<span className="count">0</span>
      </div>
    );
}

export default Counter

Counter.css
button{
	background-color:green;
	font-size:16px;
	padding:15px 30 px;
	color: white;
	width:100px;
}
.count{
	font-size:40px;
	padding: 15px 30 px;
	padding-left:20px;
	
}
```

### Step 04 Handling Click Event on increment button

In JSX we use attribute in cammel case like **onClick** and we use **{}** to define the method which will be called. OR
anything in javascript will be put under **{}** in JXS.

In JSX pass the reference , for example ```<button onClick={increment}/> ``` is correct way instead of ```<button onClick={increment()}/> ```

**Counter.jsx**
```
import React, { Component } from 'react';
import './Counter.css';

function Counter() {  
    return (
      <div className="counter">
        <button onClick={increment}>+1</button>	
		<span className="count">0</span>
      </div>
    );
}

function increment(){
  console.log('increment');
}
export default Counter
```
Above onclicking the button above code won't increment the counter. For incrementing the counter we need to maintain state.

### Step 05 Adding state to a React Counter Component

In the above code function **increment** is outside the function Component **Counter**. If function components become more and more complex then it is better to convert the function component into class component. In this step we will create class component for **Counter** and then start adding the state.

converting the funtion component into class component.
```
class Counter extends Component{
render(){
	return...
} 
}
```
Now, we will put the increment function inside the class component.Now this function will become local. So calling the local method use **this.method**

##### If we want **this.state** to be available in method increment(), we need to bind the method to the class(Component) in the constructor

https://stackoverflow.com/questions/38334062/why-do-you-need-to-bind-a-function-in-a-constructor
```
import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {  

  //Define the initial state in constructor
  //state  ->counter = 0
  constructor(){
    super();
    this.state = {
      counter : 0
    }
    this.increment = this.increment.bind(this);
  }
  render(){
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
```

### Step 06 Understanding React - behind the scenes - Virtual DOM

![alt text](https://user-images.githubusercontent.com/16119293/66696984-d7e52100-ecee-11e9-8e5d-a466f6569c71.JPG)


Updating the DOM in quite difficult process. To overcome this React use Logical DOM. For e.g initial state of counter is 5 and after updating it become 6, then for both the scenario React will maintain DOM. Now, React will find out the difference between these two Virtual DOM and update the original DOM based on difference.

### Step 07 Understanding setState and using arrow functions to avoid this binding

```
constructor(){
super();
//Line 1
this.state = {
counter : 0,
secondCounter : 100
}
---
}
---
//Line 2
increment(){
this.setState({
counter : this.state.counter+1
});
```
In Line 1 we have we have two value for the state and in Line 2 we are updating only one value. So this won't affect the second value used in (initial) state. 

**=>** is arrow function. It is similar to lambda expression in java.

e.g var list = [1,2,3,4]

list.forEach( x => console.log(x*2) );

When we use **=>** then there is no need to bind the function with **this**

**Before**
```
---
constructor(){
---
this.increment = this.increment.bind(this);
}

increment(){
---
}
```
**After**
```
---
constructor(){
---
//this.increment = this.increment.bind(this);
}

increment = () => {
---
}
```

**NOTE:** Arrow function prevents the need of using bind() function. setState() merge the final state with initial state

### Step 08 Defining inline javascript and CSS

**Example inline CSS**
```
render(){
    return (
      <div className="counter">
        <button onClick={this.increment}>+1</button>	
		<span className="count" style={{fontSize : "50px"}}>{this.state.counter}</span>
      </div>
    );
  }
```
**style** will accept the object not string, hence here we used  **{}**

We can write the above code as follow
```
render(){
    const style = {fontSize:"50px", padding: "15px 30 px"};
    return (
      <div className="counter">
        <button onClick={this.increment}>+1</button>	
		<span className="count" style={style}>{this.state.counter}</span>
      </div>
    );
  }
  ```
  **const/let/var** ??
  
### Step 09 Defining multiple Counter buttons and adding a Component Prop

```
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
		 <Counter/> // Line 1
     		 <Counter /> // Line 2
        </div>
      );
	}
}
```
We can add ```<Counter />``` as above in Line 1 and Line 2 each having different state. But we have problems here
1. For each button we want separate increment operation
2. When we clicked on second button we want variable associated with second button to be updated.

**Solution:**
1. So Once we set up the value(hard coded) we cann't change it. So for that we are going to use **props** to pass the different increment value based on Button clicked.

**App.js**
```
class App extends Component {
    render(){
      return (
        <div className="App">
          <LearningComponents />
          <Counter by={1} />
          <Counter by={5} />
          <Counter by={10} />
        </div>
      );
  }
}
```
**Counter.jsx**
```
render(){
    //const style = {fontSize:"50px", padding: "15px 30 px"};
    return (
      <div className="counter">
        <button onClick={this.increment}>+{this.props.by}</button>	
		<span className="count">{this.state.counter}</span>
      </div>
    );
  }

  increment(){//update state counter++
    console.log('increment');
    //this.state.counter++;
    this.setState({
      counter :this.state.counter + this.props.by
    });
  }
  
}
```

### Step 10 Understanding React Component Props - Default Value and Type Constrain

Setting default value to props and checking the type of props

```
class App extends Component {
    render(){
      return (
        <div className="App">
          <LearningComponents />
          <Counter  /> // Line 1
	  <Counter /> // Line 2
          <Counter by={5} />
          <Counter by={10} />
        </div>
      );
  }
  }
  ```
  Counter @ Line 1 and 2 will take default value defined in Counter.jsx
  
  ```
  class Counter extends Component{
  
  }
  
  Counter.defaultProps = {
  by : 1
} 
 ```

**Checking PropsType:** For Checking Props Type **(1)** import-->```import PropTypes from 'prop-types';``` **(2)**  add the below code outside (Counter class in this case) 
```
Counter.propTypes = {
  by : PropTypes.number
}
```
### Step 11 Using React Developer Tools Chrome Plugins

Add React Developer tool plugins to chrome

### Step 12 Moving State Up - Refactoring to Counter and Countering Button Components

Here we refactor the code to have a Counter and CounterButton separately. Counter will contains all the button used and our objective is to maintain single count operation (irrespective of button pressed i.e. if we press the two button both should be summed up as single unit (single state))

**App.js**
```
class App extends Component {
  render(){
      return (
        <div className="App">        
          <Counter/>      
        </div>
      );
  }
}
```

**Counter.jsx**
```
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component{
  render(){
      return (
        <div className="Counter">        
          <CounterButton  by={1}/>          
          <CounterButton by={5} />
          <CounterButton by={10} />
        </div>
      );
  }
}
class CounterButton extends Component {  

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
        <button onClick={this.increment}>+{this.props.by}</button>	
		<span className="count">{this.state.counter}</span>
      </div>
    );
  }

  increment(){//update state counter++
    console.log('increment');
    //this.state.counter++;
    this.setState({
      counter :this.state.counter + this.props.by
    });
  }
  
}

CounterButton.defaultProps = {
  by : 1
} 
CounterButton.propTypes = {
  by : PropTypes.number
}
export default Counter
```

### Step 13 Moving State Up - Adding state to Counter Component

Example of calling parent method from child--> we are calling increment method in parent from the child using **this.props.incrementMethod** in child(CounterButton)
```
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
  }

  render(){
      return (//passing the increment method to child (CounterButton)
        <div className="Counter">        
          <CounterButton  by={1} incrementMethod={this.increment}/>          
          <CounterButton by={5} incrementMethod={this.increment}/>
          <CounterButton by={10} incrementMethod={this.increment}/>
        </div>
      );
  }

  increment(){   
    console.log("Increment from Parent"); 
    /*this.setState({
      counter :this.state.counter //+ this.props.by
    });*/
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
  }
  render(){
    //const style = {fontSize:"50px", padding: "15px 30 px"};
    return (
      <div className="counter">
        <button onClick={this.increment}>+{this.props.by}</button>	
		<span className="count">{this.state.counter}</span>
      </div>
    );
  }
  
  increment(){   
    //console.log("Increment from Parent"); 
    this.setState({
      counter :this.state.counter + this.props.by
    });
    this.props.incrementMethod();
  }
}

CounterButton.defaultProps = {
  by : 1
} 
CounterButton.propTypes = {
  by : PropTypes.number
}
export default Counter
```
**Note:** Template literals are string literals allowing embedded expressions. Template literals are enclosed by the back tick(``).

```
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
  }

  render(){
      return (//passing the increment method to child (CounterButton)
        <div className="Counter">        
          <CounterButton  by={1} incrementMethod={this.increment}/>          
          <CounterButton by={5} incrementMethod={this.increment}/>
          <CounterButton by={10} incrementMethod={this.increment}/>
          <span className="count">{this.state.counter}</span>
        </div>
      );
  }

  increment(by){   
    console.log(`Increment from Parent - ${by}`); 
    this.setState({
      counter :this.state.counter + by
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
  }
  render(){
    //const style = {fontSize:"50px", padding: "15px 30 px"};
    return (
      <div className="counter">
        <button onClick={this.increment}>+{this.props.by}</button>	
		    <span className="count">{this.state.counter}</span>
      </div>
    );
  }
  
  increment(){   
    //console.log("Increment from Parent"); 
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
```

### Step 14 Best Practice - Using Previous step in setState
```
this.setState({
      counter :this.state.counter + by
    });
```
 Can be rewritten using => function as below
 ```
 this.setState(
        (prevState) => {
          return {counter : prevState.counter + by }
        }
      );
```
   

### Step 15 Adding Decrement Buttons and Reset Buttons

```
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
          <span className="count">{this.state.counter}</span>
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
```

### Step Quick Review Of Counter example

Remove the increment/decrement from the child component OR directly calling paret method from child
```
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
    // this.state = {
    //   counter : 0
    // }
    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
  }
  render(){
    //const style = {fontSize:"50px", padding: "15px 30 px"};
    return (
      <div className="counter">
        <button onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>	
        <button onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>	
		   { /*<span className="count">{this.state.counter}</span>*/}
      </div>
    );
  }
  // decrement(){
  //   this.props.decrementMethod(this.props.by);
  // }
  // increment(){       
  //   this.setState({
  //     counter :this.state.counter + this.props.by
  //   });
  //   this.props.incrementMethod(this.props.by);
  // }
}

CounterButton.defaultProps = {
  by : 1
} 
CounterButton.propTypes = {
  by : PropTypes.number
}
export default Counter
```

**Note:** Whenever you have to pass parameter to event Listener(onClick is event listener) use =>  like in this eg ```<button onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>```
