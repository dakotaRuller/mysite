import React from 'react';

const CarouselContent = ({header, text, Style, animationDirection, animateFloatDown}) => (
    <div  className="carousel-content" style={Style}>
        <div className={`header-content ${animateFloatDown}`}>
            <h2>{header}</h2>
        </div>
        <div className={`text-content ${animationDirection}`}>
            <p>{text}</p>
        </div>
    </div>
);

export default CarouselContent;