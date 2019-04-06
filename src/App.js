import React, { Component } from 'react';
//Components
import NavBar from './Components/Nav';
import Landing from './Components/LandingSection/Landing';
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
          <Landing />
          <Info />
          <Contact />
      </div>
    );
  }
}

export default App;
