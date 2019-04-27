import React, { Component } from 'react';
//Components
import NavBar from './Components/Nav/Nav';
import Landing from './Components/LandingSection/Landing';
import Info from './Components/InfoSection/Info';
import Contact from './Components/ContactSection/Contact';
//CSS
import './Components/ComponentsCSS/App.sass';
import './Resources/CSS/fontawesome/css/all.css';

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
