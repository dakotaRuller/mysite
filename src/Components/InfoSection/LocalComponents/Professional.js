import React, { Component } from 'react';
//Images
import avidImg from '../../../Resources/IMG/AvidxchangeLogo.png';
import impartnerImg from '../../../Resources/IMG/ImpartnerLogo.png';

class Professional extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs:  [
                {
                    orientation: "right-orientation",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus earum error, quasi similique unde? Alias architecto at atque blanditiis cupiditate delectus doloribus est expedita magni nulla obcaecati officiis, rem saepe similique sit suscipit ut voluptates! Harum inventore sequi veniam! A adipisci amet at deserunt doloribus, dolorum facilis fuga id illum modi nihil numquam officiis quae quo sed tempore ut veritatis voluptatum?",
                    img: {
                        src: avidImg,
                        alt: "Avidxchange Logo"
                    },
                    companyName: "Avidxchange"
                },
                {
                    orientation: "left-orientation",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus earum error, quasi similique unde? Alias architecto at atque blanditiis cupiditate delectus doloribus est expedita magni nulla obcaecati officiis, rem saepe similique sit suscipit ut voluptates! Harum inventore sequi veniam! A adipisci amet at deserunt doloribus, dolorum facilis fuga id illum modi nihil numquam officiis quae quo sed tempore ut veritatis voluptatum?",
                    img: {
                        src: impartnerImg,
                        alt: "Impartner Logo"
                    },
                    companyName: "Impartner"
                }
            ]
        }
    }

    consoleLog(){
        // e.persist();
        console.log(this);
    }
    render() {
        //Not a pure function so refactor later
        const infoOrient = ({orientation, description}) => {
            if (orientation === "right-orientation") {
                return (
                    <div className="desc-box">
                        <div className="text">
                            <p>{description}</p>
                        </div>
                        <div className="empty-space"></div>
                    </div>
                )

            } else {
                return (
                    <div className="desc-box">
                        <div className="empty-space"></div>
                        <div className="text">
                            <p>{description}</p>
                        </div>
                    </div>
                )
            }
        };
        const job = (props, key) => (
            <div className={props.orientation} key={key} onScroll={this.consoleLog.bind(this)}>
                {infoOrient(props)}
                <div className="img-box">
                    <img src={props.img.src} alt={props.img.alt}/>
                </div>
                <div className="name-box">
                    <p>{props.companyName}</p>
                </div>
            </div>
        );
        return (
            <div className="professional">
                {this.state.jobs.map((i, key) => (job(i, key)))}
            </div>
        )
    }
}

export default Professional;