import React, { useEffect, useReducer, useState } from 'react';

const Order = (props) => {
    const {_id,FullName,Email,TravelCost,TravelPlace} = props.singleOrder
    
    
    
   
    
    return (
        <div className="col-md-5 mx-auto">
            <div className="card  border-success mb-3 mt-4">
                <div className="card-header bg-transparent border-success">Name:{FullName}</div>
                <div className="card-body text-success">
                    <h5 className="card-title">Travel Place : {TravelPlace}</h5>
                    <h6 className="card-text">Travel Cost : {TravelCost}</h6>
                </div>
                <div className="card-footer bg-transparent border-success">email: {Email}</div>
                <div className="btn btn-danger" onClick={()=>props.handleDelete(_id)} >Delete</div>
            </div>
        </div>
    );
};

export default Order;