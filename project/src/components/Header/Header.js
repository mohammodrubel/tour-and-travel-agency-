import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import Button from 'react-bootstrap/Button'
import useAuth from '../../useAuth/useAuth';


const Header = () => {
    const {users,logOut} =useAuth()
    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" className="backgroundHeader" variant="dark">
                <Container>
                <Navbar.Brand href="#home">National Travels</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                    <NavLink className="comonNav" to="/home"activeStyle={{fontWeight: "bold",color: "black"}}>Home</NavLink>
                    <NavLink className="comonNav" to="/blog"activeStyle={{fontWeight: "bold",color: "black"}}>Blog</NavLink>
                    <NavLink className="comonNav" to="/login"activeStyle={{fontWeight: "bold",color: "black"}}>login</NavLink>
                    <NavLink className="comonNav" to="/confirmbooking"activeStyle={{fontWeight: "bold",color: "black"}}>Confirmed Booking</NavLink>
                    <NavLink className="comonNav" to="/addtonewtravel"activeStyle={{fontWeight: "bold",color: "black"}}>Add To new Travel</NavLink>
                    </Nav>
                    <Nav className="ms-auto">
                    {users?.email && <span style={{color:'white'}} className="mt-2"> <b>{users?.displayName}</b> </span>}
                    {users?.email && <NavLink  onClick={logOut} to="#"className="comonNav mt-1">LogOut</NavLink>}
                   { users?.email &&  <img className="headerpersonalphoto" src={users?.photoURL} alt="" />}
                    
                    <NavLink  to="#"className="comonNav mt-1">Login</NavLink> 
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;