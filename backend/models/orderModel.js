
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    Table_Number: {
        type: String,
        required: [true, "Please enter your Room Number"],
    },
    Order_Time: {
        type: String,
        required: [true, "Please enter your Room Type"],
        // enum: ['Luxury', 'Delux', 'Normal', 'Super Delux']
    },

    Item_Name: {
        type: String,
        required: [true, "Please enter your Item Name"],
    },
    Price: {
        type: Number,
        required: [true, "Please enter your Item Number"],
    },
    Quantity: {
        type: Number,
        required: [true, "Please enter your Item Quantity"],
    },
    // Avilable_Not: {
    //     type: String,
    //     required: [true, "Room Avialable or Not "],

    //     },
});

module.exports = mongoose.model("Order", OrderSchema);