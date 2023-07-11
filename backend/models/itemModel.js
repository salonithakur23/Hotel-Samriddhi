const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    
    Item_Name: {
        type: String,
    },
    price: {
        type: Number,

    },
    Category_Name: {
        type: String,

    },


});

module.exports = mongoose.model("Item",itemSchema);