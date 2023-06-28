const express = require("express");
const { getAllOrder, createOrder , updateOrder,deleteOrder} = require("../controllers/orderController");


const router=express.Router();
 
//making routes
// for all students record
router.route("/orders").get(getAllOrder);
router.route("/order/new").post(createOrder);
router.route("/order/:id").put(updateOrder).delete(deleteOrder);


module.exports= router