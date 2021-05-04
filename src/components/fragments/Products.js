import React, { Component } from 'react'

export default class Products extends Component {

    constructor(props){
        super(props);
        this.state={products:[]}
    }



    refreshList(){
        fetch('http://localhost:44374/api/Product')
        .then(response=>response.json())
        .then(data=>{
            this.setState({products:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    delete(id){
        if(window.confirm('Are you sure??')){
            fetch('http://localhost:44374/api/Product/'+id,{
                method:'DELETE',
                header:{
                    'Accept':'application/json',
                    'Cotent-Type':'application/json'
                }
            })
        }
    }

    



    render() {
        const {products}=this.state;
        return (
            <div>
                <div className="container text-center">
                    <p className="lead">List of Product Records</p>
                </div>
                <table className="table text-center m-auto" >
                    <thead>
                        <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Actions</th>
                        </tr>
                        
                    </thead>
                    <tbody >
                        {
                        products.map(p=>
                            <tr key={p.id}>
                                <td><img width="50px" alt="icon" src={p.imageSrc}/></td>
                                <td>{p.title}</td>
                                <td>
                                    <button className="btn btn-primary m-2">Update</button>
                                    <button className="btn btn-dark" onClick={()=>this.delete(p.id)}>Delete</button>
                                </td>
                            </tr>
                            )}
                    </tbody>

                </table>
                
            </div>
        )
    }
}



