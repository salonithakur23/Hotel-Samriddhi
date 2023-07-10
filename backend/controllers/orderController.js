const Order = require("../models/orderModel");



// create student --Admin
exports.createOrder = (async (req, res, next) => {
    const order = await Order.create(req.body);

    res.status(201).json({
        success: true,
        order,
    });
});



exports.getAllOrder = async (req, res) => {
    const orders = await Order.find();
    res.status(200).json({
        success: true,
        orders,
    });

}


// get single item 

exports.getOrderDetail = async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return res.status(500).json({
            success: false,
            message: "Order not Found"
        });
    }

    res.status(200).json({
        success: true,
        order,
    })

};




exports.updateOrder = async (req, res, next) => {
    let order = await Order.findById(req.params.id);

    if (!order) {
        return res.status(500).json({
            success: false,
            message: "order not Found"
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
exports.updateOrderStatus = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const { newStatus } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { Status: newStatus },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({
        success: false,
        message: 'Order not found',
      });
    }

    res.status(200).json({
      success: true,
      order: updatedOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to update order status',
    });
  }
};



exports.deleteOrder = async (req, res, next) => {

    // req.body.student=req.student.id
    const order = await Order.findById(req.params.id);
  
    if (!order) {
      return next(new ErrorHandler("Order Not Found ", 404));
    }
  
    // ==========================================================================
  
    // another trick to delete one record
  
    await order.deleteOne({_id:req.params.id});
  
    //   ===========================================================================
  
    // await Order.findOneAndDelete();
  
    res.status(200).json({
      success: true,
      message: "Order delete successfully",
    });
  } ;