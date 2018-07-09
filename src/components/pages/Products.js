import React from "react";
import Product from "../Product";
import {addToCart} from "../../cart";
import {getProducts} from "../../api";


class Products extends React.Component {
    constructor(props){
        super(props)
        this.state={
            products: []
        }
    }
    componentDidMount(){
        getProducts().then(products=>this.setState({
            products: products
        }))
    }
    render() {
        const productElements = this.state.products.map(product => (
            <Product 
            key={product._id}
            image={product.image} 
            name={product.name} 
            level={product.level} 
            price={product.price}
            onClick={() =>addToCart(product._id, 1)}/>
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