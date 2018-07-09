// Require mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    products: [{
        productId: {
            type: String,
            required: true          
        },
        quantity: {
            type: Number,
            required: true
        }
    }]
})

var Order = mongoose.model("Order", orderSchema);

module.exports = Order;