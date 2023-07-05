const express = require("express");
const { getAllBills, createBill, updatebill, deleteBill, getSingelBill } = require("../controllers/billcontroller");


const router=express.Router();
 

router.route("/bills").get(getAllBills);
router.route("/bill/new").post(createBill);
router.route("/bill/:id").put(updatebill).delete(deleteBill).get(getSingelBill);


module.exports= router