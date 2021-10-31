import React from 'react';
import imgOne from '../img/a.jpg'
import Button from 'react-bootstrap/Button'
import img2 from '../img/b.jpg'
import img3 from '../img/c.jpg'

const Blog = () => {
    return (
        <div>
            <div className="container">
            <div className="row">
            <div class="row col-md-8 row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                    <img src={imgOne} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Africa</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src={img2}class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Jordarn</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src={img3} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Usa</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-4 border border-1"> 
                    <h2 className="text-center ">National Travels schedule </h2>
                    <p className="text-center " style={{color:'gray'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut accumsan enim. Praesent tristique viverra nisl, a tristique dolor hendrerit id. Nam id ipsum quis mi venenatis viverra. Sed suscipit at neque eget consectetur. Morbi ornare metus dui, id volutpat diam laoreet vitae. Quisque ac condimentum dolor. </p> <br/>
                    <hr/>
                    <p className="text-center" style={{color:'gray'}}> 
                        
                            <b>   Tuesday </b>      8.00AM -7.00PM <hr/>

                            <b>   Wednesday </b>     8:00AM - 700PM <hr/>

                            <b>   Thursday </b>     8.00 AM - 7.00PM <hr/>

                            <b>  Friday   </b>    8:00 AM - 700PM <hr/>

                            <b>  Saturday   </b>   Closed <hr/>
                            <b>  Sanday Cl  </b>   osed 
                    </p>
                </div>
            </div>
            <div className="col-md-8 mx-auto border border-1 mt-5 mb-5">
                <textarea className="w-100 p-5 border border-1" rows="5" cols="33" placeholder="Your Comment Heare">

                </textarea>
                <Button className="mt-4 mb-4 w-100" variant="success">Submit</Button>
            </div>
        </div>
        </div>
    );
};

export default Blog;