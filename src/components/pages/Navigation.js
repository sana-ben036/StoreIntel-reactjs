import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import intel from "../media/intel.png"

export default class Navigation extends Component{

    render(){
        return(
            <Navbar bg="info" expand="lg">
                <div className="mr-5">
                    <img src={intel} height="50px" alt="intel icon"/>
                </div>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className="d-inline p-2  text-white" to="/">
                            Home
                        </NavLink>
                        <NavLink className="d-inline p-2 text-white  " to="/login">
                            Login
                        </NavLink>
                        <NavLink className="d-inline p-2  text-white  " to="/signUp">
                            Sign Up
                        </NavLink>
    
                    </Nav>

                </Navbar.Collapse>

            </Navbar>
        )
    }
}