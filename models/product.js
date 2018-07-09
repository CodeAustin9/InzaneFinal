// Require mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
})

var Product = mongoose.model("Product", productSchema);

module.exports = Product;