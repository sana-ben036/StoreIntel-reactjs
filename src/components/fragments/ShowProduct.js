import React, {useState,useEffect } from 'react'
//import onAdd from '../pages/Home';
import Product from '../fragments/Product'
//import axios from 'axios';



export default function ShowProduct (props) {

    const {onAdd } = props;

   /* constructor(props){
        super(props);
        this.state={products:[],onAdd}
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



    const [products,setProducts]= useState([]);
    useEffect(()=>{
        async function fetchProducts(){
            const requesUrl = "http://localhost:44374/api/Product";
            const reponse = await fetch(requesUrl);
            const reponseJson= await reponse.json();
            console.log(reponseJson);
            setProducts(reponseJson);
        }
        fetchProducts();
    },[]);

    
        return (
            <div className="row text-center">
                {
                products.map((product)=>
                <Product key={product.id} product={product} onAdd={onAdd}></Product>
                    
                )}
                
                
            </div>
            
        )
    
}



