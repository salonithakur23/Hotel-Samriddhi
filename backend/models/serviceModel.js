const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
    guestName: {
        type: String,

    },
    phoneNumber: {
        type: Number,

    },
    roomNumber: {
        type: String,

    },
    serviceDate: {
        type: String,

    },
    service: {
        type: String,

    },
    serviceCharge: {
        type: String,
    },
});

module.exports = mongoose.model("RoomService", ServiceSchema);