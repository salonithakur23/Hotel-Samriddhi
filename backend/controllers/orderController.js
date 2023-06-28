const Order = require("../models/orderModel");



// create student --Admin
exports.createOrder = (async (req, res, next) => {
    const student = await Order.create(req.body);

    res.status(201).json({
        success: true,
        student,
    });
});

// get all students

// exports.getAllitems = catchAsyncErrors( async (req, res) => {
//     to seacrhing 

//     const apiFeature= new ApiFeatures(Student.find(),req.query).search().filter();

//   // ======================================================
//     const allstudents = await Student.find();
//       const allstudents = await apiFeature.query;

//     res.status(200).json({
//       success: true,
//       allstudents,
//     });
//   });


exports.getAllOrder = async (req, res) => {
    const orders = await Order.find();
    res.status(200).json({
        success: true,
        orders,
    });

}

exports.updateOrder = async (req, res, next) => {
    let order = await Order.findById(req.params.id);

    if (!order) {
        // return next(new ErrorHandler("Item not found ", 404));
        return res.status(500).json({
            success: false,
            message: "Itme not Found"
        });
    }
    order = await Order.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({
        success: true,
        order,
    });

}


exports.deleteOrder = async (req, res, next) => {

    // req.body.student=req.student.id
    const order = await Order.findById(req.params.id);
  
    if (!order) {
      return next(new ErrorHandler("Order Not Found ", 404));
    }
  
    // ==========================================================================
  
    // another trick to delete one record
  
    // await student.deleteOne(req.params.id);
  
    //   ===========================================================================
  
    await Order.findOneAndDelete();
  
    res.status(200).json({
      success: true,
      message: "Order delete successfully",
    });
  } ;