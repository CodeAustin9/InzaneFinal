import React from "react";
import Product from "../Product";
import {addToCart} from "../../cart";
import {products} from "../../products"


class Products extends React.Component {
    render() {
        const productElements = products.map(product => (
            <Product 
            key={product.id}
            image={product.image} 
            name={product.name} 
            level={product.level} 
            price={product.price}
            onClick={() =>addToCart(product.id, 1)}/>
        ))
        return (
            <div>
                <h1><center>Paintball Products</center> </h1>
                <div>
            <strong> {productElements}</strong>
                </div>
            </div>
        )
    }
}

export default Products;