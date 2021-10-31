import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Order from '../Order/Order';

const ConfirmBooking = () => {

    const [order,setOrder] = useState([])
    // const [orders,setOrder] = useState([])
    useEffect(()=>{
        fetch('http://localhost:7000/information')
        .then(Response => Response.json())
        .then(data =>setOrder(data))
    },[])
    console.log(order)

    const handleDelete = (id) => {
        console.log(id);
    
        const proceed = window.confirm("are you sure to cancel?");
        if (proceed) {
          const url = `http://localhost:7000/booking/delete/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                console.log(data);
                const remaining = order.filter(
                  (appointment) => appointment._id !== id
                );
                setOrder(remaining);
              }
            });
        }
      };
    return (
        <div className="container">
            <Row xs={1} md={1} className="g-4">
            { 
                order.map(singleOrder => <Order singleOrder={singleOrder} handleDelete={handleDelete}></Order>)
                        }
            </Row>
        </div>
    );
};

export default ConfirmBooking;