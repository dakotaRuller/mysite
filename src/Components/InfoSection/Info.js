import React, { Component } from 'react'
//Components
import Professional from './LocalComponents/Professional';
import Personal from './LocalComponents/Personal';
import Carousel from './LocalComponents/Carousel';
import {Waypoint} from "react-waypoint";

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    logEnter(msg) {
        console.log(msg);
        console.log(this);
    }
    logLeave() {
        console.log("Left");
    }
    render() {
        return(
                <div className="Info" id="Info">
                <h1>What I've Done</h1>
                    <div className="info-items">
                        <Carousel/>
                        {/*<Professional />*/}
                        <hr className="separator"/>
                        <h1>What I Do</h1>
                        <Personal/>
                    </div>
                </div>
        )
    }
}

export default Info;