const mongoose = require("mongoose");

const roomServiceSchema = new mongoose.Schema({
    Service_Name: {
        type: String,
    },
    Service_Charge: {
        type: Number,
    },

    


});

module.exports = mongoose.model("Service",roomServiceSchema);