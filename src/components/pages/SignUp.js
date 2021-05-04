import React, { Component, } from 'react'
import axios from "axios"
import {Container} from "@material-ui/core"
import Navigation from './Navigation';

export  class SignUp extends Component {
    
    handleSubmit = e =>{

        e.preventDefault();


        const data = {
            userName: this.userName,
            email: this.email,
            password: this.password
        };

        axios.post('http://localhost:44374/api/Authentication/Register',data)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
    
        });


    }



    render() {
        return (
            <>
            <Navigation />
            <Container  maxWidth="xs">
            <form className="m-5" onSubmit = {this.handleSubmit}>
                <h3 className="text-center mb-5">Register Form</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control"
                    type="email"
                    required
                    onChange={e => this.email = e.target.value}/>
                </div>
                <div className="form-group">
                    <label>UserName</label>
                    <input className="form-control"
                    type="text"
                    required
                    onChange={e => this.userName = e.target.value}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input className="form-control"
                    type="password"
                    required
                    onChange={e => this.password = e.target.value}/>
                </div>
                <button className="btn btn-info btn-block">Submit</button>
                        


            </form>
            </Container>
            </>
        )
    }
}
export default SignUp
