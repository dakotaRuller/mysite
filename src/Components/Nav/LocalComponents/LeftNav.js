import React, { Component } from 'react';

class LeftNav extends Component {
    render() {
        const {items} = this.props;
        const newPageItem = (props, key) => (
            <li className="nav-item-icon" key={key}>
                <a className="nav-item-link" href={props.url} target="_blank" rel="noopener noreferrer">{props.jsx}</a>
            </li>
        );
        const samePageItem = (props, key) => (
            <li className="nav-item-icon" key={key}>
                <a className="nav-item-link" href={props.url}>{props.jsx}</a>
            </li>
        );
        return (
            <div className="nav-social">
                {items.map((item, key) => {
                    if (item.newPage) {
                        return newPageItem(item, key)
                    } else {
                        return samePageItem(item, key)
                    }
                })}
            </div>
        );
    }
}

export default LeftNav;