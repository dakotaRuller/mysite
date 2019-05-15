import React, { Component } from 'react';
// import { FaUserNinja } from 'react-icons/fa';
//Components

//FA


class Contact extends Component {
    render() {
        return(
            <div className="Contact" id="Contact">
                    <form className="contact-form">
                        <input className="contact-name" id="ContactName" type="text" placeholder="&#xf007; Whats you name?"/>
                        <input className="contact-phone" id="ContactPhone" type="text" placeholder="&#xf10b; Lets get them digits."/>
                        <textarea className="contact-message" id="ContactMessage" placeholder="&#xf27b; Message? Love letter? Just need someone to talk to? Just let me know." maxLength="200"/>

                        <button className="contact-button">Get in touch <i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
                    </form>
            </div>
        )
    }
}

export default Contact;