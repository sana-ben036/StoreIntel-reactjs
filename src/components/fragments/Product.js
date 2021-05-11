import React from 'react';

export default function Product(props) {
    const { product, onAdd } = props;
    return (
        <div className="card m-4 col-s-12 col-lg-3 ">
            <img src={product.imageSrc} alt="product" className="card-img-top " />
            <h6>{product.title}</h6>
            <div>${product.price}</div>
            {product.inStock === 0 ? <p className="text-danger">Finished</p> : <p className="text-success">In Stock</p> }
            <div className="m-2">
                <button className="btn btn-success center" onClick={() => onAdd(product)}>Add To Cart</button>
            </div>
        </div>



    );
}

