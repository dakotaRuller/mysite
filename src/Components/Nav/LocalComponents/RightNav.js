import React, { Component } from 'react';

class RightNav extends Component {
    render() {
        const {items} = this.props;
        const navItem = (props, key) => (
            <li className="nav-item-font" key={key}>
                <a className="nav-item-link" href={props.section}>{props.jsx}</a>
                <hr />
            </li>
        );
        return (
            <div className="nav-site">
                {items.map((item, key) => (navItem(item, key)))}
            </div>
        );
    }
}

export default RightNav;