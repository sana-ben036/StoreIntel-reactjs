import React, { Component } from 'react'

export default class Categories extends Component {

    constructor(props){
        super(props);
        this.state={categories:[]}
    }



    refreshList(){
        fetch('http://localhost:44374/api/Category')
        .then(response=>response.json())
        .then(data=>{
            this.setState({categories:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    delete(id){
        if(window.confirm('Are you sure??')){
            fetch('http://localhost:44374/api/Category/'+id,{
                method:'DELETE',
                header:{
                    'Accept':'application/json',
                    'Cotent-Type':'application/json'
                }
            })
        }
    }

    



    render() {
        const {categories}=this.state;
        return (
            <div>
                <div className="container text-center">
                    <p className="lead">List of Category Records</p>
                </div>
                <table className="table text-center m-auto" >
                    <thead>
                        <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                        </tr>
                        
                    </thead>
                    <tbody >
                        {
                        categories.map(c=>
                            <tr key={c.id}>
                                <td><img width="50px" alt="icon" src={c.imageSrc}/></td>
                                <td>{c.title}</td>
                                <td>{c.description}</td>
                                <td>
                                    <button className="btn btn-primary m-2">Update</button>
                                    <button className="btn btn-dark" onClick={()=>this.delete(c.id)}>Delete</button>
                                </td>
                            </tr>
                            )}
                    </tbody>

                </table>
                
            </div>
        )
    }
}



