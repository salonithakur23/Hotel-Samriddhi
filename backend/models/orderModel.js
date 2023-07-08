
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  Table_Number: {
    type: String,
    required: [true, "Please enter the table number"],
  },
  // Order_Time: {
  //   type: String,
  //   required: [true, "Please enter the order time"],
  // },
  // Category_Type:{
  //   type: String,
  //   required: [true, "Please enter the category Type"],

  // },
  Items: [
    {
      Item_Name: {
        type: String,
        required: [true, "Please enter the item name"],
      },
      Price: {
        type: Number,
        // required: [true, "Please enter the item price"],
      },
      Quantity: {
        type: Number,
        // required: [true, "Please enter the item quantity"],
      },
    },
  ],
});

module.exports = mongoose.model("Order", OrderSchema);
