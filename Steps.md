# Step By Step guide to build TODO app
* Create React App
   Use the below link to create the react app
   https://github.com/facebook/create-react-app
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
### Part Of Component
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
Above code is called **JSX** which is an extension of javascript. So in javascript file we are including something like HTML and this is called **JSX**. Instead of JSX we can also use the javascript to code the same thing
