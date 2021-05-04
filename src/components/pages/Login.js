import React, { Component } from 'react'
import axios from "axios"
import {Container} from "@material-ui/core"
import Navigation from './Navigation';

export class Login extends Component {
    
    handleSubmit = e =>{

        e.preventDefault();

        const data = {
            userName: this.userName,
            password: this.password
        };

        
    

        axios.post('http://localhost:44374/api/Authentication/Login',data)
        .then(res => {
            localStorage.setItem('token',res.data.token)
        })
        .catch(err => {
            console.log(err)
    
        })


    };

    










    render() {
        return (
            <>
            <Navigation />
            <Container  maxWidth="xs">
            <form className="m-5" onSubmit = {this.handleSubmit}>
                <h3 className="text-center mb-5">Login Form</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control"
                    type="email"
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

export default Login
