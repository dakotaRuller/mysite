import React, { Component } from 'react';
//Components
import NavBar from './Components/Nav';
import About from './Components/AboutSection/About';
import Info from './Components/InfoSection/Info';
import Contact from './Components/ContactSection/Contact';
//CSS
import './Components/css/App.css';
import './Resources/css/fontawesome/css/all.css';

class App extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div className="App">
          <header>
              <NavBar />
          </header>
          <About />
          <Info />
          <Contact />
      </div>
    );
  }
}

export default App;
