import React from 'react';
import {getCart} from '../../cart';
import{products} from "../../products";

class Order extends React.Component{
    render(){
        const cart=getCart()
        const number=cart.reduce((acc, item)=>acc+item.count, 0)
        const subtotal=cart.reduce((acc, item)=>acc+item.count*products.find(x=>x.id==item.id).price, 0)
        const shipping = 5;
        const tax = .08;
        const total=subtotal*(1+tax) + shipping
        return(
        <div>
            <h2>Order Summary</h2>
           You are purchasing {number} products.
           Your subtotal is: {subtotal}.
           Shipping cost: {shipping}.
           Total Tax: {tax*subtotal}.
           Grand Total: {total}.
           <button onClick={this.props.placeOrder}>Place Order</button>        
            </div>
        )
    }
}
export default Order;