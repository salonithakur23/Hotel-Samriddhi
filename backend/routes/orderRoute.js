const express = require("express");
const {
  getAllOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  getOrderDetail,
  updateOrderStatus
} = require("../controllers/orderController");

const router = express.Router();

// Routes
router.route("/orders").get(getAllOrder);
router.route("/order/new").post(createOrder);
router.route("/order/:id").put(updateOrderStatus, updateOrder).delete(deleteOrder).get(getOrderDetail);

module.exports = router;
