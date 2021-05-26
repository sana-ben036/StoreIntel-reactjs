import React, { useState } from 'react'
import axios from "axios"
import {Container} from "@material-ui/core"
import Navigation from './Navigation';
//import {useHistory} from 'react-router-dom'


const Login = () => {
    const initialState = {userName :'', password:''}
    const [information, setInformation]= useState(initialState)
    //const [redirect, setRedirect]= useState(false)
    //const history = useHistory();

    


  const handleChangeInput = e => {
    const {name, value} = e.target
    // console.log(name , " " , value)
    setInformation({...information, [name]: value})
    }

    const handelSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:44374/api/Authentication/Login',information)
        .then(res => {
            localStorage.setItem('token',res.information.token)

        
        })
        .catch(err => {
            console.log(err)
    
        })

 
    }
    

    

    return (
        <>
        <Navigation />
        <Container  maxWidth="xs">
        <form className="m-5" onSubmit = {handelSubmit}>
            <h3 className="text-center mb-5">Login Form</h3>
            
            <div className="form-group">
                <label>UserName</label>
                <input className="form-control"
                type="text"
                name="userName"
                onChange={handleChangeInput}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input className="form-control"
                type="password"
                name="password"
                onChange={handleChangeInput}/>
            </div>
            <button className="btn btn-info btn-block">Submit</button>
                    
    
    
        </form>
        </Container>
        </>
    )
}

export default Login
