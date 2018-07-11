const products = [
    {
        
        image: "http://inzanepb.com/____impro/1/onewebmedia/Imagen_1.png?etag=W%2F%2219d54-5a8c7d48%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=341%2B258",
        name: "First Rental",
        level: "Basic Level",
        price: 29.99
    },
    {
       
        image: "http://inzanepb.com/____impro/1/onewebmedia/Imagen2.png?etag=W%2F%221c708-598a5557%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=341%2B258",
        name: "First Eko",
        level: "Entry Level",
        price: 29.99
    },
    {
        
        image: "https://psycogotcha.com/wp-content/uploads/2014/12/800504.jpg",
        name: "First Hard",
        level: "Entry Level",
        price: 26.99
    },
    {
      
        image: "https://psycogotcha.com/wp-content/uploads/2014/12/800505.jpg",
        name: "Maddness",
        level: "Intermediate/Training",
        price: 29.99
    },
    {
        
        image: "http://inzanepb.com/____impro/1/onewebmedia/Imagen5.png?etag=W%2F%2224b69-598a555a%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=341%2B256",
        name: "Maddness Zero",
        level: "Performance",
        price: 29.99
    },
    {
       
        image: "https://psycogotcha.com/wp-content/uploads/2014/12/800507.jpg",
        name: "Demmented",
        level: "Tournament",
        price: 39.99
    },
]
var mongoose = require("mongoose");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/username";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);
var Product = require("../models/product");
products.forEach(product=>{
    product = new Product(product)
    product.save()
})