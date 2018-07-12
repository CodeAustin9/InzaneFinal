import React from 'react';
import {getCart} from '../../cart';
import {getProducts} from '../../api';
import "./index.css";

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
        <div className="order-summary">
            <h2><strong>Order Summary</strong></h2>
            <table>
            <tr><td>Number of Products Purchased: </td> <td> {number} </td></tr>
            <tr><td>Subtotal: </td><td> {subtotal}</td></tr>
            <tr><td>Shipping cost: </td><td> {shipping}</td></tr>
            <tr><td> Total Tax: </td><td>{Math.round((tax*subtotal)*100/100)}</td></tr>
            <tr><td> Grand Total: </td><td>{Math.round(total*100)/100}</td></tr>
           </table>
           <button onClick={this.props.placeOrder}> Place Order</button>    
            
            </div>
        )
    }
}
export default Order;