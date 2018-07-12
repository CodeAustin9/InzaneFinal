import React from 'react';
import {getCart} from '../../cart';
import {placeOrder} from '../../api';
import OrderSummary from "../OrderSummary";
import {isLoggedIn} from "../../auth";
import "./cart.css";

class Cart extends React.Component{
    state={}
    placeOrder = ()=>{
    let cart = getCart()
    cart = cart.map(product=>({productId: product.id, quantity: product.count}))
    placeOrder(cart)
    .then(()=>this.setState({done: true}))
    .catch(()=>this.setState({error: true}))
    }
    render(){
        if (this.state.done){
            return <div className="message">Thank you! Your order has been placed!</div>
        }
        let message=null
        if(!isLoggedIn()){
            message=<div className="message">You must log in to order.</div>
        }
        return(
           <div className="cart">
               {message}
               <OrderSummary placeOrder={this.placeOrder}/>
           </div>

        )   
    }
}
export default Cart;