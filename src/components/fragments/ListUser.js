import React, { Component } from 'react'


export default class ListUser extends Component {

    constructor(props){
        super(props);
        this.state={users:[]}
    }



    refreshList(){
        fetch('http://localhost:44374/api/User')
        .then(response=>response.json())
        .then(data=>{
            this.setState({users:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }


    componentDidUpdate(){
        this.refreshList();
    }



    delete(id){
        if(window.confirm('Are you sure??')){
            fetch('http://localhost:44374/api/User/'+id,{
                method:'DELETE',
                header:{
                    'Accept':'application/json',
                    'Cotent-Type':'application/json'
                }
            })
        }
    }


    update(id){
        fetch('http://localhost:44374/api/User/'+id,{
                method:'UPDATE',
                header:{
                    'Accept':'application/json',
                    'Cotent-Type':'application/json'
                }
            })
    }

    



    render() {
        const {users}=this.state;
        return (
            <div>
                <div className="container text-center">
                    <p className="lead">List of Users Records</p>
                </div>
                <table className="table text-center m-auto" >
                    <thead>
                        <tr>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Actions</th>
                        </tr>
                        
                    </thead>
                    <tbody >
                        {
                        users.map(u =>
                            <tr key={u.id}>
                                <td>{u.userName}</td>
                                <td>{u.email}</td>
                                <td>
                                    <button className="btn btn-primary m-2" onClick={()=>this.update(u.id)}>Update</button>
                                    <button className="btn btn-dark" onClick={()=>this.delete(u.id)}>Delete</button>
                                    
                                </td>
                            </tr>
                            )}
                    </tbody>

                </table>
                
            </div>
        )
    }
}



