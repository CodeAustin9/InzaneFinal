import React from 'react';

const Product = props => (
    <div onClick={props.onClick}>
        <img src={props.image} />
        <div>
            {props.name}
        </div>
        <div>
            {props.level}
        </div>
        <div>
            ${props.price}
        </div>
    </div>

)
export default Product;