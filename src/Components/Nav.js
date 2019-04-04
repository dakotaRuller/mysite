import React, { Component } from 'react';
import './css/nav.css';

class NavBar extends Component {
    render() {
        return (
            <div className="Nav">
                <ul>
                    <div className="nav-social">
                        <li className="nav-item-icon">
                            <a className="nav-item-link" href="https://www.linkedin.com/in/dakota-ruller-b53429150" target="_blank"><i className="fab fa-linkedin nav-icon"></i></a>
                        </li>
                    </div>
                    <div className="nav-site">
                        <li className="nav-item-font">
                            <a className="nav-item-link" href="#Info">Info</a>
                            <hr />
                        </li>
                        <li className="nav-item-font">
                            <a className="nav-item-link" href="#">Career</a>
                            <hr />
                        </li>
                        <li className="nav-item-font">
                            <a className="nav-item-link" href="#Contact">Contact</a>
                            <hr />
                        </li>
                    </div>
                </ul>
            </div>
        );
    }
}

export default NavBar;