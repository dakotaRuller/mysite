import React, { Component } from 'react'
//Components
import Professional from './LocalComponents/Professional';
import Personal from './LocalComponents/Personal';
//ComponentsCSS
import '../ComponentsCSS/Info.css';

class Info extends Component {
    render() {
        return(
            <div className="Info" id="Info">
                    <h1>- About Me -</h1>
                <div className="info-items">
                    <Professional />
                    <Personal/>
                </div>
            </div>
        )
    }
}

export default Info;