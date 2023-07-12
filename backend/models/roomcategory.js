const mongoose = require("mongoose");

const RoomCategorySchema = new mongoose.Schema({
    roomCategory: {
        type: String,
    },
    price: {
        type: Number,
    },

});

module.exports = mongoose.model("RoomCategory",RoomCategorySchema);