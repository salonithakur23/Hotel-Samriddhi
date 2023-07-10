const express = require("express");
const { getAllEmployee, createEmployee  , updateEmployee, deleteEmployee, getEmployeeDetail} = require("../controllers/employeeController");


const router=express.Router();
 
//making routes

router.route("/employees").get(getAllEmployee);
router.route("/employee/new").post(createEmployee);
router.route("/employee/:id").put(updateEmployee).delete(deleteEmployee).get(getEmployeeDetail);


module.exports= router