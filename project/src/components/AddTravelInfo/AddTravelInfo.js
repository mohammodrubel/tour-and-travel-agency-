import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AddToTravel.css'
import Button from 'react-bootstrap/Button'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddTravelInfo = () => {
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:7000/travel',data)
        .then(res => {
            if(res.data.insertedId){
            alert('Congratulations! Data insert SuccessFully')
            reset()
            }
        })
    };

    

    return (
        <div className="newTravel">
            <h3 style={{color:'white',textAlign:'center'}}>Add To New Travel</h3>
            <Container className="p-5">
                <form  onSubmit={handleSubmit(onSubmit)}className="p-5">
                <Row>
                   <Col className="col-md-6">
                        <textarea  {...register("Discription")} placeholder="Description" name="Discription"  class="aria h-100 form-control w-100 mt-2"></textarea>
                        </Col>

                        <Col className="col-md-6">
                            
                        <input  {...register("Travel_Cost")}type="number"placeholder="Travel Cost" className=" mt-4  border border-1 form-control" />
                        <input  {...register("Travel_Place")} type="text"placeholder="Travel Place Name" className=" mt-4  border border-1 form-control" />
                        <input  {...register("Img_url")} type="text"placeholder="img_url" className=" mt-4  border border-1 form-control" />
                        </Col>
                        <div className="text-center"><Button variant="warning" type="submit" className="mt-5 w-50" >Add New Travel </Button></div>
                </Row>
                </form>

                <div class="alert alert-danger col-md-6 mx-auto" role="alert">
                    <h1 class="alert-heading">Alert !</h1>
                    <p>You must be fill up all input field  !</p>
                    <hr/>
                    <p class="mb-0">When you add to new Travel place, check the update <Link to="/home">information</Link> </p>
                </div>
            </Container>

                
                
        </div>
    );
};

export default AddTravelInfo;