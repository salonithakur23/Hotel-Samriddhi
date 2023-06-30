const express = require("express");
const { getAllOrder, createOrder , updateOrder,deleteOrder, getOrderDetail} = require("../controllers/orderController");


const router=express.Router();
 
//making routes
// for all students record
router.route("/orders").get(getAllOrder);
router.route("/order/new").post(createOrder);
router.route("/order/:id").put(updateOrder).delete(deleteOrder).get(getOrderDetail);


module.exports= router