import React, { Component } from 'react'
import { Container} from '@material-ui/core'


export default class ShowProduct extends Component {

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

/*
    componentDidUpdate(){
        this.refreshList();
    }*/

    

    



    render() {
        const {products}=this.state;
        return (
            <Container >
            <div className="row text-center">
                {
                products.map(p=>
                    <div key={p.id} className="card m-4 col-s-12 col-lg-4 col-xl-2 ">
                        <img src={p.imageSrc} alt="product" className="card-img-top" />
                        <div className="card-body">
                            <h6>{p.title}</h6> <br/>
                            <p>{p.price} $</p>
                            {p.inStock === 0 ? <p className="text-danger">Finished</p> : <p className="text-success">In Stock</p> }
                            <button className="btn btn-success center">
                            Add to Cart
                            </button>
                        </div>
                    </div>
                )}
                
                
            </div>
            </Container>
            
        )
    }
}



