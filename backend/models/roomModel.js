
const  mongoose = require ("mongoose");

const RoomSchema = new mongoose.Schema({
    Room_Number: {
        type: String,

    },
    Room_Type: {
        type: String,

        },

    Price: {
        type: String,

    },
    Avilable_Not: {
        type: String,
        },
});

module.exports = mongoose.model("Room", RoomSchema);