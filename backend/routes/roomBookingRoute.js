const express = require("express");
const { getAllBooking, createBooking ,deleteBooking, updateBooking, getSingelBooking} = require("../controllers/roomBookingController");


const router=express.Router();
 
//making routes

router.route("/room-bookings").get(getAllBooking);
router.route("/room-booking/new").post(createBooking);
router.route("/room-booking/:id").put(updateBooking).get(getSingelBooking).delete(deleteBooking);


module.exports= router