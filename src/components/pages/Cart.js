import React from 'react';
import {getCart} from '../../cart';
import {placeOrder} from '../../api';
import OrderSummary from "../OrderSummary";
import {isLoggedIn} from "../../auth";

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
            return <div>Thank you! Your order has been placed!</div>
        }
        let message=null
        if(!isLoggedIn()){
            message=<div>You must log in to order.</div>
        }
        return(
           <div>
               {message}
               <OrderSummary placeOrder={this.placeOrder}/>
           </div>

        )   
    }
}
export default Cart;