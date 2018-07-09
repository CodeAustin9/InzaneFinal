import React from 'react';
import {getCart} from '../../cart';

import OrderSummary from "../OrderSummary";

class Cart extends React.Component{
    render(){
        return(
            <OrderSummary 
                placeOrder={()=>console.log("placing order")}/>

        )   
    }
}
export default Cart;