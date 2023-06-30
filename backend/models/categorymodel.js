const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    Category_Name: {
        type: String,
        required: [true, "Please enter your Item Number"],
    },
    // Category_Price: {
    //     type: Number,
    //     required: [true, "Please enter your Item Number"],
    // },
});

module.exports = mongoose.model("Category",CategorySchema);