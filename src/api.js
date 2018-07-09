function getProducts(){
    return fetch("api/products")
    .then(res=>{
        if (res.ok){
            return res.json()
        }
        throw new Error("Unknown error occured.")
    })
}

export {getProducts};
