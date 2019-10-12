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

In JSX pass the reference , for example **<button onClick={increment}/>** is corret way instead of **<button onClick={increment()}/> **

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
Above onclicking the button above code won't increment the counter. For incrementing the conuter we need to maintain state.

### Step 05 Adding state to a React Counter Component

In the above code function **increment** is outside the function Component **Counter**. If function components become more and more complex then it is better to convert the function component into class component. In this step we will create class component for **Counter** and then start adding the state.

converting the funtion component into class component.
```
class Counter extends Component{
render(){
	return...
} an dwhi
}
```
No we will put the increment function inside the class component.Now this function will become local. So calliing the local method use **this.method**

```
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
