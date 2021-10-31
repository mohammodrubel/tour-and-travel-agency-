import { Col, Container, Row } from 'react-bootstrap';
import './Booking.css'
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button'
import useAuth from '../../useAuth/useAuth'
import axios from 'axios';





const Booking = (props) => {
    const { register, handleSubmit ,reset} = useForm();
    const {_id,Discription,Img_url,Travel_Cost,Travel_Place} = props.item
    const {users} = useAuth()

    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:7000/information',data)
        .then(res => {
            if(res.data.insertedId){
                alert('Congratulations! your booking is confirmed')
                reset()
            }
        })
    }


    return (
        <div className="booking">
            <h1 className="text-center" >Booking your Dreem Place</h1> <hr />
            <div className="container-fluid">
                <Row className="mt-5">

                    <div className="col-md-6"> <img className="img-fluid" src={Img_url}  alt="" /></div>  
                            <div className="col-md-6">
                            <form onSubmit={handleSubmit(onSubmit)} style={{textAlign:'left'}}>
                                    <label class="form-label" style={{color:'white'}}>Your Travel Place</label>
                                    <input className="form-control" value={Travel_Place} {...register("TravelPlace") } />

                                    <label class="form-label" style={{color:'white'}}>Your Travel Cost</label>
                                    <input className="form-control" value={Travel_Cost}  {...register("TravelCost")} />

                                    <label class="form-label" style={{color:'white'}}>Your Full Name</label>
                                    <input className="form-control"  {...register("FullName")} />
                                    
                                    <label class="form-label" style={{color:'white'}}>Your Email Address</label>
                                    <input className="form-control"value={users.email} {...register("Email")} />

                                    <label class="form-label "  style={{color:'white'}}>from Date</label>
                                    <input className="form-control "type="date" placeholder="From Date"{...register("fromDate")} />

                                    <label class="form-label "  style={{color:'white'}}>To Date</label>
                                    <input className="form-control "type="date" placeholder="To Date"{...register("ToDate")} />

                                    <Button className="btn btn-success w-100 mt-3" type="submit">Submit Booking Information</Button>
                            </form>
                    </div>  
                    <p className="text-center mt-5" style={{color:'white'}}>{Discription}</p>  

                </Row>
            </div>
        </div>
    );
};

export default Booking;