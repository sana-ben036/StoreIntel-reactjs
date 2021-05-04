import React, {Component} from 'react'
import axios from "axios"
import Navigation from './Navigation';



export default class Home extends Component {

    state = {};
    
    componentDidMount(){

        const config ={
            headers:{
                Authorization: 'Bearer' + localStorage.getItem('token')
            }
        };


        axios.get('http://localhost:44374/api/User', config)
        .then(res =>{
            this.setState({
                user:res.data
            });
        },
        err =>{
            console.log(err)
        })
    }
    
    
    
    render() {
        return(
        <>
        <Navigation />

        {this.state.user ? <h3>Hi {this.state.user.UserName}</h3> : <h3>home</h3>}
        

        </>
        )
        
    }
}

