# Step By Step guide to build TODO app
* Create React App
   Use the below link to create the react app
   https://github.com/facebook/create-react-app
   ```
   npx create-react-app my-app
   cd my-app
   npm start
   ```
   
## An update to create React App
1. There are two kinds of components in React 1. Function and 2. Class

### Create React app - Recent update

1. App.js is no longer created as class components. It is switched to Function Component . In this course we have used App.js as class Component.

##### Change You need to Make in Next Step in Visual Studio Code

Replace App.js with code below:
```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}
export default App;
```


## Exploring the React project structure
* **package.json :** It is similar for Javascript project what POM.xml file for Java project. Here we define the dependency which is required for running the React app.
1. React can be used for developing Web as well as native app(android and Iphone app)
  ``` 
   {
     "name": "todo-app",
     "version": "0.1.0",
     "private": true,
     "dependencies": {
       "react": "^16.8.6",
       "react-dom": "^16.8.6",
       "react-scripts": "3.0.1"
     },
     "scripts": {
       "start": "react-scripts start",
       "build": "react-scripts build",
       "test": "react-scripts test",
       "eject": "react-scripts eject"
     },
     "eslintConfig": {
       "extends": "react-app"
     },
     "browserslist": {
       "production": [
         ">0.2%",
         "not dead",
         "not op_mini all"
       ],
       "development": [
         "last 1 chrome version",
         "last 1 firefox version",
         "last 1 safari version"
       ]
     }
   }
```
2. For developing Web app we use **react-dom** and **react-native** framework for native app.
3. **"react": "^16.8.6"** is core of React framework and it is same for Web as well and native application
4. **"react-dom"** helps to run the React app on the browser.
5. **"react-scripts"** provide the code to **start, build, test,eject** the app.
6. Once we define the dependencies in **package.json**, npm install it(transitive dependencies as well) in **node_modules**==local maven repository/target folder in Java project 

* **README.md :** This is documentation of the project.
* **public folder :** The most important file is **index.html**. This file is launched(on **http://localhost:3000/**) when start the app(**npm start**) 
* **src folder :** This folder contains all the code of React.
```
**index.html**
   <div id="root"></div>
**index.js**
   ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render()(is a utility function) will populate the div (with id as root) with App component.
```
## Introduction To React Components
In the previous step, index.js is trying to render **"App"** component into **"root"** element.
![alt text](https://user-images.githubusercontent.com/16119293/60289848-081dd500-9935-11e9-87d8-0fb917aee62a.JPG)
1. What is Component in React?<br/>

**Ans.** In React, UI can be splits into independent,reusable piece of codes and these pieces of codes are Component.<br/>

2. What does Component contains?<br/>

**Ans.** A typical web application contains Header,footer,Menu,login page, logout page in our case to-do page and etc.<br/>
Component helps us to design, develop each of independent,reusable piece of code. So we can have Header component,Footer component etc.
React apps are built using reusable and independent component.
In react **root** component is typically **App** components.<br/>
Below is Code for **App.js**
```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App Extends Component{
   render(){
      return(
         <div className="App">
          Hello World!
         </div>
      );
   }
}

export default App;

```
### Parts Of Component
![alt text](https://user-images.githubusercontent.com/16119293/60289906-2c79b180-9935-11e9-911b-1b0ae8016ad3.JPG)

1. View--> JSX or javascript
2. Logic--> javascript
3. Styling--> CSS
4. State--> Internal Data Store
5. Props--> Pass Data
Below code snippet from **App.js**, tells how div should be structured for View
```
<div className="App">
          Hello World!
</div>
```
Above code is called **JSX** which is an extension of javascript. So in javascript file we are including something like HTML and this is called **JSX**. Instead of JSX we can also use the javascript to code the same thing.

### Step 06 Playing with React class Component
```
// App.js
import React, { Component } from 'react';
---
---
class App extends Component{
   render(){
      return(
         <div className="App">
                Hello World!
          <FirstComponent/>// we need to register FirstComponent in order to be visible in App Component
        </div>
      );
  }
}

class FirstComponent extends Component {
  render(){
    return (
      <div className="myCompo">
        First Component!		
      </div>
    );
  }
}
```

So to create Component, we need to extends **Component** and impliments the **render()** method.

**Note:we need to register FirstComponent in order to be visible in App Component**


### Step 07 Introduction To Function Components in React

We should write the Components in separate js file. For  sake of simplicity we are using one js file App.js

**What is Function Component:**


```
class App extends Component{
   render(){
      return(
         <div className="App">
                Hello World!
          <FirstComponent/>
          <SecondComponent>
          <ThirdComponent/>
        </div>
      );
  }
}

function ThirdComponent(){
return(
   <div className="thirdComponent">
      Third Component
   </div>
);
}
```
### Step 08 Exploring JSX Further- Babel and More

**Babel:** convert the JSX into javascript (javascript compiler to support older verson of js)

In JSX every node should be closed.e.g. <br>-->html valid but in JSX invalid

All the element should be wrapped up in single parent element.

Custom component should start with capital letter in jSX.

whenever isJSX is used, React should be imported.

### Step 09 Refactoring Components to individual module and Quick review of JavaS
So far we have learn to create a component using two ways
1. Class Component
2. Function Component

In React **"App"** is the parent component. In our example First,Second etc are child component

In React we define each component is separate file. In javascript any javascript file is called javascript module. So App.js is a module
So we will put the file in **src** folder. For our purpose we will create a folder **components** inside **src** folder and inside **components** we will again create a folder called **learning examples** and inside that we will create our module.

E.g. First module will be named like **First Component.jsx**. So any js file contaning JSX can be saved with **.jsx extension**. After that we need to import **FirstComponent in App.js** like **import FirstComponent from './components/learning-examples/FirstComponent'** . and we need to use **export default** whenever we are creating Component and we need to use  **import React, { Component } from 'react';** . Our FirstComponent.jsx will look like as follow

```
import React, { Component } from 'react';
export default class FirstComponent extends Component {
  render(){
    return (
      <div className="myCompo">
        First Component!		
      </div>
    );
  }
}
```
We can import default Component directly. For e.g. **import FirstComponent ...** but suppose I have put the second component inside FirstComponent then I cann't directly import it. In this case we need to put that component inside **{}**.
Example:
**import FirstComponent,{SecondComponent} from './components/learning-examples/FirstComponent'**
```
import React, { Component } from 'react';
export default class FirstComponent extends Component {
  render(){
    return (
      <div className="myCompo">
        First Component!		
      </div>
    );
  }
}
class SecondComponent extends Component {
  render(){
    return (
      <div className="secondCompo">
        Second Component!		
      </div>
    );
  }
}
```
So , same we can conclude that **Component** inside **import React, { Component } from 'react';** is not default.Hence we have used curly bracket.



