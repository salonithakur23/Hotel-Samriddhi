const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    Employee_Name: {
        type: String,

    },
    Phone_Number: {
        type: String,

    },

    Address: {
        type: String,
 
    },
    Email: {
        type: String,
  
    },
    Gender: {
        type: String,
  
    },
    Dob: {
        type: String,
  
    },
    Role: {
        type: String,
  
    },
    Salary: {
        type: String,
  
    },


});

module.exports = mongoose.model("Employee", EmployeeSchema);