import {emptyCart} from "./cart";

function getProducts(){
    return fetch("/api/products")
    .then(res=>{
        if (res.ok){
            return res.json()
        }
        throw new Error("Unknown error occured.")
    })
}
function placeOrder(items){
    return fetch("/api/orders", {
        credentials: "same-origin",
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
            products: items
        }) // body data type must match "Content-Type" header
    })
    .then(response => {
        if (response.ok){
            emptyCart()
            return
        }
        throw new Error("Could not place order.")
    }) // parses response to JSON

}
export {getProducts, placeOrder};
