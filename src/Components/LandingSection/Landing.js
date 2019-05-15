import React, { Component } from 'react';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xPos: "0",
            yPos: "0"
        };
        this.moveContentOnMouse = this.moveContentOnMouse.bind(this);
    }

    trackScroll(e) {
        e.persist();
        console.log(e);
    }
    //Moves
    moveContentOnMouse(e) {
        let x = e.clientX;
        let y = e.clientY;
        let divX = x / 40;
        let divY = y / 40;
        this.setState({xPos: `-${divX}px`, yPos: `-${divY}px`});
    }

    render() {
        const contentPosition = {
            transform: `translate(${this.state.xPos}, ${this.state.yPos})`,
        };
        return(
            <div className="Landing">
                <div onMouseMove={this.moveContentOnMouse} style={contentPosition}>
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
                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;