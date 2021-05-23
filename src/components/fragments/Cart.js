import React from 'react';




export default function Cart(props) {


    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;






    return (
        
        
        <div className="block mt-4">
            <div className=" m-4">
            <h3 className="text-center mb-5">Cart Items</h3>
            <div>
            {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
            <div key={item.id} className="row ">
                <div className="col-12">{item.title}</div>
                <br/>
                <div className="row w-5 ">
                    <div className="col-1 ">
                    <button onClick={() => onRemove(item)} className="remove ">
                        -
                    </button>{' '}
                    
                    </div>
                    <div className="col-1 ">
                    
                    <button onClick={() => onAdd(item)} className="add ">
                        +
                    </button>
                    </div>

                    <div className="col-8 text-right">
                    {item.qty} x ${item.price.toFixed(2)}
                    </div>

                </div>
                
            </div>
            ))}

            {cartItems.length !== 0 && (
            <>
                <hr></hr>
                <div className="row">
                <div className="col-2">Price</div>
                <div className="col-2 text-right">${itemsPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                <div className="col-2">Tax</div>
                <div className="col-2 text-right">${taxPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                <div className="col-2">Shipping</div>
                <div className="col-2 text-right">
                    ${shippingPrice.toFixed(2)}
                </div>
                </div>

                <div className="row">
                <div className="col-2">
                    <strong>Total</strong>
                </div>
                <div className="col-2 text-right">
                    <strong>${totalPrice.toFixed(2)}</strong>
                </div>
                </div>
                <hr />
                <div className="row m-auto">
                <button className="btn btn-success " onClick={() => alert('Implement Checkout!')}>
                    Checkout
                </button>
                </div>
            </>
        )}
            </div>

            </div>
                
        </div>
        
    );
}
