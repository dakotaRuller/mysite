import React, { Component } from 'react';
//Images
import avidImg from '../../../Resources/IMG/AvidxchangeLogo.jpeg';
import impartnerImg from '../../../Resources/IMG/ImpartnerLogo.jpg';

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
    render() {
        //Not a pure function so refactor later
        const infoOrient = ({orientation, description}) => {
            if (orientation === "right-orientation") {
                return (
                    <div className="box-1">
                        <div className="text">
                            <p>{description}</p>
                        </div>
                        <div className="empty-space"></div>
                    </div>
                )

            } else {
                return (
                    <div className="box-1">
                        <div className="empty-space"></div>
                        <div className="text">
                            <p>{description}</p>
                        </div>
                    </div>
                )
            }
        };
        const job = (props, key) => (
            <div className={props.orientation} key={key}>
                {infoOrient(props)}
                <div className="box-2">
                    <img src={props.img.src} alt={props.img.alt}/>
                </div>
                <div className="box-3">
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