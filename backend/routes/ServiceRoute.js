const express = require("express");
const { createRoomservice, getAllRoomservice, getRoomserviceDetails, deleteRoomservice, updateRoomservice} = require("../controllers/ServiceController");


const router=express.Router();
 
//making routes
// for all students record
router.route("/guestservices").get(getAllRoomservice);
router.route("/guest/new").post(createRoomservice);
router.route("/guest/:id").put(updateRoomservice).delete(deleteRoomservice).get(getRoomserviceDetails);


module.exports= router