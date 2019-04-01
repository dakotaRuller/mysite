import React, { Component } from 'react';
import './Components/css/App.css';
//Components
import About from './Components/AboutSection/About';
import Info from './Components/InfoSection/Info';
import Contact from './Components/ContactSection/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
          <About className="About"/>
          <Info className="Info"/>
          <Contact className="Contact"/>
      </div>
    );
  }
}

export default App;
