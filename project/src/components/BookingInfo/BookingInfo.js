import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Booking from '../Booking/Booking';

const BookingInfo = (props) => {
    const {bookingInfo} = useParams()
    const [item,SetItem] = useState()

    useEffect(()=>{
        fetch('http://localhost:7000/travel')
        .then(Response => Response.json())
        .then(data => SetItem(data.find((p)=> p._id === bookingInfo)))
    },[bookingInfo])

    console.log(item)
    return (
        <div className="text-center">
            {
                !item ? <div class="spinner-grow mx-auto text-center" role="status"><span class=" visually-hidden">Loading...</span></div> : <Booking item={item}> </Booking>
            }
        </div>
    );
};

export default BookingInfo;