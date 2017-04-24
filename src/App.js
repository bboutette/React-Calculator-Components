import React, { Component } from 'react';
import './App.css';
import Keys from './components/Keys.js';
import Display from './components/Display.js'
//make separate componenets, keys, display, then import them in the parent component

class App extends Component {
  render(){
    return(
      <div className="container">
        <p className="title"> GA Instruments TI-WDI </p>
        <Display />
        <Keys />
      </div>
    )
  }
}

export default App;
