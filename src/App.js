import React, { Component } from 'react';
import './App.css';
//Components
import About from './Components/About';
import Info from './Components/Info';
import Contact from './Components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
          <About/>
          <Info className="Info"/>
          <Contact/>
      </div>
    );
  }
}

export default App;
