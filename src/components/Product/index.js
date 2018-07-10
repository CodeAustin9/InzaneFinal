import React from 'react';
import "./index.css";

const Product = props => (
    <div onClick={props.onClick}>
        <div className="productImg">
        <img src={props.image} />
        </div>
        <div>
        <div className="productName">
            {props.name}
            </div>
        </div>
        <div>
        <div className="productLevel">
            {props.level}
        </div>
        </div>
        <div>
        <div className="productPrice">
            ${props.price}
            </div>
        </div>
    </div>

)
export default Product;