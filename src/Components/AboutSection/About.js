import React, { Component } from 'react'
import '../css/About.css';

class About extends Component {
    render() {
        return(
            <div className="About">
                <div className="about-header">
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

export default About;