import React, { useState } from "react"
import axios from "axios"
import {Container} from "@material-ui/core"
import Navigation from './Navigation';
import {useHistory} from 'react-router-dom'



const SignUp = () => {

    const initialState = {userName :'', email:'', password:''}
    const [information, setInformation]= useState(initialState)
    const history=useHistory();

    


  const handleChangeInput = e => {
    const {name, value} = e.target
    // console.log(name , " " , value)
    setInformation({...information, [name]: value})
    }

    const handelSubmit = (e) =>{
        e.preventDefault()
        // console.log(information)
        axios.post('http://localhost:44374/api/Authentication/Register', information)
        .then(response => {
            console.log(response);
            history.push("Login")
            
        })
        .catch(err => { console.log(err) })

        



        
    }



   return (
    <>
    <Navigation />
    <Container  maxWidth="xs">
    <form className="m-5" onSubmit = {handelSubmit}>
        <h3 className="text-center mb-5">Register Form</h3>
        <div className="form-group">
            <label>Email</label>
            <input className="form-control"
            type="email"
            name="email"
            onChange={handleChangeInput}/>
        </div>
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
export default SignUp