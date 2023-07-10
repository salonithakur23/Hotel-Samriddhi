const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',

  },
  resName: {
    type: String,

  },
  phoneNumber: {
    type: String,

  },
  address: {
    type: String,

  },
  gstNumber: {
    type: String,

  },
  bookingDateTime: {
    type: Date,

  },
  tableNumber: {
    type: String,

  },
  total: {
    type: Number,

  },
  items: [
    {
      item: {
        type: String,

      },
      price: {
        type: Number,

      },
      quantity: {
        type: Number,

      },
      price_after_Quantity: {
        type: Number,

      }
    },
  ],
  paymentMethod:{
    type:String,

  }
});

const Bill = mongoose.model('Bill', billSchema);
module.exports = Bill;

