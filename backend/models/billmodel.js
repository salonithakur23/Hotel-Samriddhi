const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
  },
  resName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  gstNumber: {
    type: String,
    required: true,
  },
  bookingDateTime: {
    type: Date,
    required: true,
  },
  tableNumber: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  items: [
    {
      item: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price_after_Quantity: {
        type: Number,
        required: true,
      }
    },
  ],
  paymentMethod:{
    type:String,
    required:true
  }
});

const Bill = mongoose.model('Bill', billSchema);
module.exports = Bill;

