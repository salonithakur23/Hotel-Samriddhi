const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    Guest_Name: {
        type: String,

    },
    Phone_Number: {
        type: String,

    },

    Address: {
        type: String,

    },

    Room_Number: {
        type: String,

    },
    Room_BookType: {
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
    Special_Request: {
        type: String,

    },


});

module.exports = mongoose.model("Booking", BookingSchema);