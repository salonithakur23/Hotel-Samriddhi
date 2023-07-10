const mongoose = require("mongoose");

const GuestSchema = new mongoose.Schema({
    Guest_Name: {
        type: String,

    },
    Guest_Number: {
        type: String,

    },

    Address: {
        type: String,

    },
    Email: {
        type: String,

    },
    Room_Number: {
        type: String,

    },
    Room_Quantity: {
        type: String,

    },
    Booking_Date_Time: {
        type: String,

    },
    Checkin_Date_Time: {
        type: String,

    },
    Checkout_Date_Time: {
        type: String,

    },
    Number_Of_Children: {
        type: String,

    },
    Number_Of_Adults: {
        type: String,

    },


});

module.exports = mongoose.model("Guest", GuestSchema);