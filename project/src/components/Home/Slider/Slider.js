import React from 'react';
import { Carousel } from 'react-bootstrap';
import imgOne from '../../img/01 (1).jpg'
import imgTwo from '../../img/01 (2).jpg'
import imgThree from '../../img/01 (3).jpg'
import Button from 'react-bootstrap/Button'
import './Slider.css'


const Slider = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={imgOne}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h1>LOVE & Travel</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                    <Button className="customBtn"> Booking Now </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={imgTwo}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h1>LOVE & Travel</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                    <Button className="customBtn"> Booking Now </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={imgThree}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h1>LOVE & Travel</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                    <Button className="customBtn"> Booking Now </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Slider;