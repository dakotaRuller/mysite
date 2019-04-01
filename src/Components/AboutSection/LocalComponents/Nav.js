import React, { Component } from 'react';
import '../../css/nav.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li className="nav-item">
                        <a className="nav-item-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-item-link" href="#">Info</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-item-link" href="#">Career</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-item-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavBar;