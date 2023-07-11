
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  Table_Number: {
    type: String,
    required: [true, "Please enter the table number"],
  },
  Status:{
    type:String,
    required:true,

  },
  Items: [
    {
      Item_Name: {
        type: String,

      },
      price: {
        type: Number,

      },
      Quantity: {
        type: Number,

      },
    },
  ],
});

module.exports = mongoose.model("Order", OrderSchema);
