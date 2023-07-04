const express = require("express");
const { getAllcategories, createCategory, updatecategory, deleteCategory, getCategoryDetail } = require("../controllers/categorycontroller");


const router=express.Router();
 
//making routes
// for all students record
router.route("/categories").get(getAllcategories);
router.route("/category/new").post(createCategory);
router.route("/category/:id").put(updatecategory).get(getCategoryDetail).delete(deleteCategory);


module.exports= router