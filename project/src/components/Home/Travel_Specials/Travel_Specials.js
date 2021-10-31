import React from 'react';
import { Container, Row ,Col} from 'react-bootstrap';
import './Travel_specials.css'

const Travel_Specials = () => {
    

    return (
        <Container className="container-fluid">
            <Row>
                <div className="mt-5 mb-5">
                    <h1 className="text-center">TRAVIO SPECIALS</h1>
                    <h5 className="text-center">Why Travel with Tutive?</h5>
                </div>
                <Col className="col-md-3 col-sm-6 mt-3   col-12">
                    <div className="card customCard">
                        <img src="https://i.ibb.co/nRdpBWk/011-1.jpg" />
                        <h6>2000+ Our Worldwide Guide</h6>
                    </div>
                </Col>
                <Col className="col-md-3 col-sm-6 mt-3   col-12">
                    <div className="card customCard">
                        <img src="https://i.ibb.co/gwYbTdS/011-2.jpg" />
                        <h6>100% Trusted Tour Agency</h6>
                    </div>
                </Col>
                <Col className="col-md-3 col-sm-6 mt-3   col-12">
                    <div className="card customCard">
                        <img src="https://i.ibb.co/bX29BM3/011-3.jpg" />
                        <h6>12+ Years of Travel Experience</h6>
                    </div>
                </Col>
                <Col className="col-md-3 col-sm-6 mt-3   col-12">
                    <div className="card customCard">
                        <img src="https://i.ibb.co/YBBCCt5/011-4.jpg" />
                        <h6>98% of Our Travelers are Happy</h6>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Travel_Specials;