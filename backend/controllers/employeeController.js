const Employee = require("../models/employeeModel");



// create student --Admin
exports.createEmployee = (async (req, res, next) => {
    const employee = await Employee.create(req.body);

    res.status(201).json({
        success: true,
        employee
    });
});


exports.getAllEmployee = async (req, res) => {
    const emp = await Employee.find();
    res.status(200).json({
        success: true,
        emp
    });

}

exports.updateEmployee = async (req, res, next) => {
    let empl = await Employee.findById(req.params.id);

    if (!empl) {
        // return next(new ErrorHandler("Item not found ", 404));
        return res.status(500).json({
            success: false,
            message: "Employee not Found"
        });
    }
    empl = await Employee.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({
        success: true,
        empl,
    });

}


// get one employeee

exports.getEmployeeDetail = async (req, res, next) => {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
        return res.status(500).json({
            success: false,
            message: "Employee not Found"
        });
    }

    res.status(200).json({
        success: true,
        employee,
    })

};


exports.deleteEmployee = async (req, res, next) => {

    // req.body.student=req.student.id
    const employee = await Employee.findById(req.params.id);
  
    if (!employee) {
      return next(new ErrorHandler("employee not found ", 404));
    }
  
    // ==========================================================================
  
    // another trick to delete one record
  
    // await student.deleteOne(req.params.id);
  
    //   ===========================================================================
  
    await Employee.findOneAndDelete();
  
    res.status(200).json({
      success: true,
      message: "Employee delete successfully",
    });
  } ;