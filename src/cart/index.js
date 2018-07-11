let cart = [] 
export function addToCart(id, count){
    let item=cart.find(x => x.id == id)
    if (item){
        item.count += count
    } else{
        cart.push({id, count})
    }
     
}
export function removeItem(id){
    cart=cart.filter(item => item.id !=id)
   
}
export function getCart(){
    return cart;
}
export function emptyCart(){
    cart = []
}