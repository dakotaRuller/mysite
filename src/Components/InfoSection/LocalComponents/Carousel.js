import React, { Component } from 'react';
import CarouselContent from './CarouselContent';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentIndex: 0,
            animateDirection: "",
            animateFloatDown: "",
            data: [
                {
                    bgColor: "#BCCAFF",
                    header: "one"
 ,
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
                {
                    bgColor: "#FF9D9D",
                    header: "two"
 ,
                text: "Ab asperiores autem consectetur corporis cupiditate delectus deserunt dolore, est eveniet facere id molestias nam nemo nostrum odit pariatur possimus qui reprehenderit rerum saepe sunt totam velit veritatis vero?"},
                {
                    bgColor: "#78FFA4",
                    header: "three",
                    text: "At officia, sapiente. Aliquid debitis, fugit nemo quis sequi similique soluta veritatis voluptatem. Ab asperiores autem consectetur corporis cupiditate delectus deserunt dolore, est eveniet facere id molestias nam nemo nostrum odit pariatur possimus qui reprehenderit rerum saepe sunt totam velit veritatis vero?"
                },
                {
                    bgColor: "#FF3011",
                    header: "four"
,
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia, sapiente. Aliquid debitis, fugit nemo quis sequi similique soluta veritatis voluptatem. Ab asperiores autem consectetur corporis cupiditate delectus deserunt dolore."},
                {
                    bgColor: "#FFE767",
                    header: "five"
,
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia, sapiente. Aliquid debitis, fugit nemo quis sequi similique soluta veritatis voluptatem. "}
            ],
            jobOne: {
                description: "Est eveniet facere id molestias nam nemo nostrum odit pariatur possimus qui reprehenderit rerum saepe sunt totam velit veritatis vero?"
            },
            jobTwo: {
                description: "Job Two Dude"
            }
        };
        this.carouselFunction = this.carouselFunction.bind(this);
        this.setDataState = this.setDataState.bind(this);
    }
    setDirectionDefault() {
        this.setState({animateDirection: ""})
    }
    setDataState(index) {
        this.setState({contentIndex: index});
    }
    carouselFunction(type) {
        let index = this.state.contentIndex;
        const maxLength = this.state.data.length - 1;

        if(type === "next") {
            this.setState({animateDirection: "float-in-right"});
            if(index < maxLength) {
                index++;
                this.setDataState(index);
            } else if(index === maxLength) {
                index = 0;
                this.setDataState(index);
            }
        } else if(type === "previous") {
            this.setState({animateDirection: "float-in-left"});
            if(index > 0) {
                index--;
                this.setDataState(index);
            } else if(index <= 0) {
                index = maxLength;
                this.setDataState(index);
            }
        }
        this.setState({animateFloatDown: "float-in-top"});
        setTimeout(() => {
            this.setState({animateDirection: "", animateFloatDown: ""});
        }, 550);
    }

    render() {
        const contentStyle = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "25px"
        };
        const stateData = this.state.data[this.state.contentIndex];
        return (
            <div className="carousel" style={{backgroundColor: stateData.bgColor}}>
                <div className="prev" onClick={() => this.carouselFunction("previous")}>
                    <i className="fas fa-chevron-left"></i>
                </div>
                <CarouselContent setDirectionDefault={this.setDirectionDefault} header={stateData.header} text={stateData.text} Style={contentStyle} animationDirection={this.state.animateDirection} animateFloatDown={this.state.animateFloatDown}/>
                <div className="next" onClick={() => this.carouselFunction("next")}>
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
        )
    }
}

export default Carousel;