const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    Category_Type: {
        type: String,
        required: [true, "Please enter your Item Number"],
    },

});

module.exports = mongoose.model("Category",CategorySchema);