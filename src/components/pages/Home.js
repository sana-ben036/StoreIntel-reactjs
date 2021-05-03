import React, {Component} from 'react'
import axios from "axios"


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

        if(this.state.user){
            return(
                <h3>Hi {this.state.user.UserName}</h3>
            )
        }
        return (
            <div>
                <h3>home</h3>
            </div>
    
        )
    }
}

