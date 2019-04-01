import React, { Component } from 'react'
import NavBar from './LocalComponents/Nav';
import '../css/About.css';
import imgPath from '../../Resources/Img/me-code.jpg';

const Profile = () => (
    <div className="profile">
        <img className="about-photo" src={imgPath} alt="Coding"/>
        <div>
            <h1 className="name">Dakota Ruller</h1>
            <p>Developer</p>
        </div>
    </div>
);
class About extends Component {
    render() {
        return(
            <div className="About">
                <div className="about-container">
                    <NavBar/>
                    <Profile/>
                </div>
            </div>
        )
    }
}

export default About;