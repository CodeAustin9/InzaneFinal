var router = require("express").Router();
var Order = require("../models/order");
var Product = require("../models/product");

router.get("/products", function(req, res){
    Product.find({})
    .then(products=>res.json(products))  
    .catch(err=>res.sendStatus(500))
})
router.post("/orders", function(req, res){
   
    if(!req.user){
        return res.sendStatus(400)
    }
    var order = new Order({
        userId: req.user._id,
        products: req.body.products
    })
    order.save()
    .then(doc=>res.sendStatus(200))
    .catch(err=>{
        res.sendStatus(500)
      
    })
})

module.exports=router;