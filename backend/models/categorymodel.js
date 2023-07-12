const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    Category_Type: {
        type: String,
    },
   

});

module.exports = mongoose.model("Category",CategorySchema);