
const  mongoose = require ("mongoose");

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

    // Price: {
    //     type: String,
    //     required: [true, "Please enter your Item Number"],
    // },
    // Avilable_Not: {
    //     type: String,
    //     required: [true, "Room Avialable or Not "],
        
    //     },
});

module.exports = mongoose.model("Order", OrderSchema);