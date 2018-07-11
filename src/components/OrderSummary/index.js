import React from 'react';
import {getCart} from '../../cart';
import {getProducts} from '../../api';

class Order extends React.Component{
    state={
    }
    componentDidMount(){
        getProducts().then(products=>this.setState({
            products: products
        }))
    }
    render(){
        if(!this.state.products){
            return <div>Please wait.</div>
        }
        const cart=getCart()
        const number=cart.reduce((acc, item)=>acc+item.count, 0)
        const subtotal=cart.reduce((acc, item)=>acc+item.count*this.state.products.find(x=>x._id==item.id).price, 0)
        const shipping = 5;
        const tax = .08;
        const total=subtotal*(1+tax) + shipping
        return(
        <div>
            <h2><strong>Order Summary</strong></h2>
            You are purchasing {number} products.
           Your subtotal is: {subtotal}.
           Shipping cost: {shipping}.
           Total Tax: {tax*subtotal}.
           Grand Total: {Math.round(total*100)/100}.
           <button onClick={this.props.placeOrder}> Place Order</button>    
            
            </div>
        )
    }
}
export default Order;