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
