import React, { Component } from 'react';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentIndex: 0,
            data: [
                {
                    bgColor: "#BCCAFF",
                    text: "one"
                },
                {
                    bgColor: "#FF9D9D",
                    text: "two"
                },
                {
                    bgColor: "#78FFA4",
                    text: "three"
                },
                {
                    bgColor: "#FF3011",
                    text: "four"
                },
                {
                    bgColor: "#FFE767",
                    text: "five"
                }
            ],
            jobOne: {
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia, sapiente. Aliquid debitis, fugit nemo quis sequi similique soluta veritatis voluptatem. Ab asperiores autem consectetur corporis cupiditate delectus deserunt dolore, est eveniet facere id molestias nam nemo nostrum odit pariatur possimus qui reprehenderit rerum saepe sunt totam velit veritatis vero?"
            },
            jobTwo: {
                description: "Job Two Dude"
            }
        };
        this.carouselFunction = this.carouselFunction.bind(this);
        this.setDataState = this.setDataState.bind(this);
    }
    setDataState(index) {
        this.setState({contentIndex: index});
    }
    carouselFunction(type) {
        let index = this.state.contentIndex;
        const maxLength = this.state.data.length - 1;

        if(type === "next") {
            if(index < maxLength) {
                index++;
                this.setDataState(index);
            } else if(index === maxLength) {
                index = 0;
                this.setDataState(index);
            }
        } else if(type === "previous") {
            if(index > 0) {
                index--;
                this.setDataState(index);
            } else if(index <= 0) {
                index = maxLength;
                this.setDataState(index);
            }
        }
    }
    render() {
        const contentStyle = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 25px"
        };
        const stateData = this.state.data[this.state.contentIndex];
        return (
            <div className="carousel" style={{backgroundColor: stateData.bgColor}}>
                <div className="prev" onClick={() => this.carouselFunction("previous")}>
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className="carousel-content" style={contentStyle}>
                    <p>{stateData.text}</p>
                </div>
                <div className="next" onClick={() => this.carouselFunction("next")}>
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
        )
    }
}

export default Carousel;