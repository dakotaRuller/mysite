import React, { Component } from 'react';

class Landing extends Component {
    trackScroll(e) {
        e.persist();
        console.log(e);
    }
    render() {
        return(
            <div className="Landing">
                <div onScroll={this.trackScroll} className="landing-header">
                    <h1 className="header-item">Dakota</h1>
                    <h1 className="header-item">Ruller</h1>
                    <p className="profession">
                        - <a href="https://en.wikipedia.org/wiki/Web_developer" target="_blank" rel="noopener noreferrer">Web Developer</a> || <a
                        href="https://en.wikipedia.org/wiki/Software_engineer" target="_blank" rel="noopener noreferrer">Software Engineer</a> || <span className="text">Creative Thinker</span> -
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