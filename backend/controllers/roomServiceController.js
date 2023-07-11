const Service = require("../models/rooomServicModel");



// create student --Admin
exports.createService = (async (req, res, next) => {
    const service = await Service.create(req.body);

    res.status(201).json({
        success: true,
        service
    });
});




exports.getAllServices = async (req, res) => {
    const ser = await Service.find();
    res.status(200).json({
        success: true,
        ser,
    });

}

exports.updateService = async (req, res, next) => {
    let ser1 = await Service.findById(req.params.id);

    if (!ser1) {
        // return next(new ErrorHandler("Item not found ", 404));
        return res.status(500).json({
            success: false,
            message: "Room Service not Found"
        });
    }
    ser1 = await Service.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({
        success: true,
        ser1,
    });

}

exports.getServiceDetail = async (req, res, next) => {
    const service = await Service.findById(req.params.id);

    if (!service) {


        return res.status(500).json({
            success: false,
            message: "Room Service not Found",
        });
    }
    res.status(200).json({
        success: true,
        service,
    });
};



exports.deleteService = async (req, res, next) => {

    // req.body.student=req.student.id
    console.log(res.params)
    const service = await Service.findById(req.params.id);
  
    if (!service) {
      return next(new ErrorHandler("Room Service not Found", 404));
    }
  
    // ==========================================================================
  
    // another trick to delete one record
  
    await service.deleteOne({_id:req.params.id});
  
    //   ===========================================================================
  
    // await Service.findOneAndDelete();
  
    res.status(200).json({
      success: true,
      message: "Room Service delete successfully",
    });
  } ;
