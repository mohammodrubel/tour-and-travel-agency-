import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import imgOne from '../../img/a (1).jpg'
import imgTwo from '../../img/a (2).jpg'
import imgThree from '../../img/a (3).jpg'
import './Guides.css'

const Guides = () => {
    return (
        <div>
            <div className="container-fluid mt-5 mb-5">
                <Row>
                    <h1 className="text-center">Tour Guides</h1>
                    <p className="text-center">Our highly trained efficient guides.</p>
                    <Col className="col-md-4 col-sm-6 col-12">
                        <div className="card curdCustoms" style={{borderRadius:'10px',padding:'10px'}}>
                            <img src={imgOne} style={{borderRadius:'10px'}} alt="" />
                            <h5>Gemes Henry</h5>
                            <ul className="list-inline p-2">
                                <li className="list-inline-item comonli"><i class="fab fa-facebook"></i></li>
                                <li className="list-inline-item comonli"><i class="fab fa-instagram"></i></li>
                                <li className="list-inline-item comonli"><i class="fab fa-twitter"></i></li>
                                <li className="list-inline-item comonli"><i class="fab fa-facebook-messenger"></i></li>
                                <li className="list-inline-item comonli"><i class="fas fa-envelope"></i></li>
                            </ul>

                        </div>
                    </Col>
                    <Col className="col-md-4 col-sm-6 col-12">
                        <div className="card curdCustoms" style={{borderRadius:'10px',padding:'10px'}}>
                            <img src={imgTwo} style={{borderRadius:'10px'}} alt="" />
                            <h5>Tomas ALva</h5>
                            <ul className="list-inline p-2">
                                <li className="list-inline-item comonli"><i class="fab fa-facebook"></i></li>
                                <li className="list-inline-item comonli"><i class="fab fa-instagram"></i></li>
                                <li className="list-inline-item comonli"><i class="fab fa-twitter"></i></li>
                                <li className="list-inline-item comonli"><i class="fab fa-facebook-messenger"></i></li>
                                <li className="list-inline-item comonli"><i class="fas fa-envelope"></i></li>
                            </ul>

                        </div>
                    </Col>

                    <Col className="col-md-4 col-sm-6 col-12">
                        <div className="card curdCustoms" style={{borderRadius:'2010',padding:'10px'}}>
                            <img src={imgThree} style={{borderRadius:'10px'}} alt="" />
                            <h5>Reunal habbri</h5>
                            <ul className="list-inline p-2">
                                <li className="list-inline-item comonli"><i class="fab fa-facebook"></i></li>
                                <li className="list-inline-item comonli"><i class="fab fa-instagram"></i></li>
                                <li className="list-inline-item comonli"><i class="fab fa-twitter"></i></li>
                                <li className="list-inline-item comonli"><i class="fab fa-facebook-messenger"></i></li>
                                <li className="list-inline-item comonli"><i class="fas fa-envelope"></i></li>
                            </ul>

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Guides;