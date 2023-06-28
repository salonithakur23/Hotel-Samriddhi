const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    
    Item_Name: {
        type: String,
        required: [true, "Please enter your Item Name"],
    },
    price: {
        type: Number,
        required: [true, "Please enter your Item Price"],
    },
    Category_Name: {
        type: String,
        required: [true, "Please enter your Item Name"],
    },


});

module.exports = mongoose.model("Item",itemSchema);