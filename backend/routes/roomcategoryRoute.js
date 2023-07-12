const express = require("express");
const { getAllCategoryRoom, createCategoryRoom, updateCategoryRoom, deleteCategoryRoom, getCategoryRoomDetail } = require("../controllers/roomCategorycontroller");


const router=express.Router();
 
//making routes
// for all students record
router.route("/room-categories").get(getAllCategoryRoom);
router.route("/add/category/new").post(createCategoryRoom);
router.route("/room-category/:id").put(updateCategoryRoom).get(getCategoryRoomDetail).delete(deleteCategoryRoom);


module.exports= router