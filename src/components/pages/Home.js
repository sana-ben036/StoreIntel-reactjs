import React from 'react'
import axios from "axios"
import Navigation from './Navigation';
import ShowProduct from '../fragments/ShowProduct'
import Cart from '../fragments/Cart'
import {useState,useEffect} from 'react';

const cartFromLocalStorage  = JSON.parse(localStorage.getItem("cartItems") || "[]");


export default function Home () {

    

    //const state = {};
    
    
    function componentDidMount () {

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


    const products = (url='http://localhost:44374/api/Product') =>{
        return{
            fetchAll: () => axios.get(url),
            
        }
    }
    
    const [cartItems, setCartItems] = useState(cartFromLocalStorage);

    useEffect(() => {
        localStorage.setItem('cartItems',JSON.stringify(cartItems));
    },[cartItems]);




    
    
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
        setCartItems(
            cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
            )
        );
        } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
        setCartItems(
            cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
        );
        }
    };

        

    
    
    
    return(
        <>
        <Navigation />
        
        
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <ShowProduct onAdd={onAdd} products={products} />
                </div>
                <div className="col-md-4">
                    <Cart onAdd={onAdd}
                        onRemove={onRemove}
                        cartItems={cartItems}/>  
                </div>
            </div>
        </div>
        </>

        )
}

