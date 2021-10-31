import React from 'react';
import { Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="container-fluid" style={{padding:'80px',background:'#1A1A1A',color:'grey'}}>
            <Row className="row d-flex align-items-center">
            <div className="col-md-4 text-center">
                <h1 className="text-center">National Travels</h1> <hr />
                <p className="text-center">In the highlighted box on the right you will find the plugins included in the theme FOR FREE. In the list below you can find also the compatibility with the most famous wordpress plugins.</p>
            </div>
            <div className="col-md-4 text-center">
                <ul className="list-inline">
                    <li>Home</li>
                    <li>Service</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="col-md-4 text-center">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Input Your Email For Contact Us"/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
            </div>
            </Row>
        </div>
    );
};

export default Footer;