import React, { Component } from 'react';
//Components
import LeftNav from './LocalComponents/LeftNav';
import RightNav from './LocalComponents/RightNav';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navLeft: [
                {
                    newPage: true,
                    jsx: <i className="fa fa-linkedin-square nav-icon" aria-hidden="true"></i>,
                    url: 'https://www.linkedin.com/in/dakota-ruller-b53429150'

                },
                {
                    newPage: true,
                    jsx: <i className="fa fa-code nav-icon" aria-hidden="true"></i>,
                    url: 'https://github.com/dakotaRuller/mysite'
                }
            ],
            rightNav: [
                {
                    jsx: "Top",
                    section: "#"
                },
                {
                    jsx: "Info",
                    section: "#Info"
                },
                {
                    jsx: "Contact",
                    section: "#Contact"
                }
            ]
        };
    }
    render() {
        return (
            <div className="Nav">
                <ul>
                    <LeftNav items={this.state.navLeft}/>
                    <RightNav items={this.state.rightNav}/>
                </ul>
            </div>
        );
    }
}

export default NavBar;