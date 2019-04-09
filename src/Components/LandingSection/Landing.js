import React, { Component } from 'react'
//ComponentsCSS
import '../ComponentsCSS/Landing.css';

class Landing extends Component {
    render() {
        return(
            <div className="Landing">
                <div className="landing-header">
                    <h1>Dakota</h1>
                    <h1>Ruller</h1>
                    <p className="profession">
                        <a href="https://en.wikipedia.org/wiki/Web_developer" target="_blank">- Web Developer -</a>
                    </p>
                </div>
                <div className="scroll-prompt">
                    <a href="#Info">
                        <i className="fas fa-chevron-down"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default Landing;