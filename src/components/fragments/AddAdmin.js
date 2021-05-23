import React, { Component, } from 'react'
import axios from "axios"

const defaultImageSrc="/img/admin2.png"




export  class AddAdmin extends Component {
    
    handleSubmit = e =>{

        e.preventDefault();


        const data = {
            userName: this.userName,
            email: this.email,
            password: this.password
        };

        axios.post('http://localhost:44374/api/Authentication/RegisterAdmin',data)
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
            <div className="container text-center">
                <p className="lead">New Admin</p>
            </div>
            <form className="m-5" onSubmit = {this.handleSubmit}>
            <img alt="Admin" src={defaultImageSrc} className="card-img-top"/>
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
            </>
        )
    }
}
export default AddAdmin
