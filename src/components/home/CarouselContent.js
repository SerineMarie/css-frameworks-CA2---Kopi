import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function CarouselContent() {
    return (
        <Carousel>
            <Carousel.Item >
                <img style={{backgroundImage: "url(../Carousel Images/carousel-1.jpg"}}
                className="d-block w-100"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img 
                className="d-block w-100" 
                src= "/Carousel images/carousel-2.jpg"
                alt="Second slide" 
                />
            </Carousel.Item>
            <Carousel.Item>
                <img 
                className="d-block w-100" 
                src= "/Carousel images/carousel-3.jpg"
                alt="Third slide"
            />
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselContent
