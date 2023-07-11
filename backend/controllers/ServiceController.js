
const Service = require("../models/serviceModel");



// create student --Admin
exports.createRoomservice = (async (req, res, next) => {
    const service = await Service.create(req.body);

    res.status(201).json({
        success: true,
        service
    });
});




exports.getAllRoomservice= async (req, res) => {
    const service = await Service.find();
    res.status(200).json({
        success: true,
        service,
    });

}


// Get single student
exports.getRoomserviceDetails = async (req, res, next) => {
    const service = await Service.findById(req.params.id);

    if (!service) {


        return res.status(500).json({
            success: false,
            message: "Service not found",
        });
    }
    res.status(200).json({
        success: true,
        service,
    });
};


exports.deleteRoomservice = async (req, res, next) => {

    const service = await Service.findById(req.params.id);

    if (!service) {
        return next(new ErrorHandler("Service not found ", 404));
    }

    // ==========================================================================

    // another trick to delete one record

    await service.deleteOne({_id:req.params.id});

    //   ===========================================================================

    // await Guest.findOneAndDelete();

    res.status(200).json({
        success: true,
        message: "Service delete successfully",
    });
};

exports.updateRoomservice = async (req, res, next) => {
    let service1 = await Service.findById(req.params.id);

    if (!service1) {
        // return next(new ErrorHandler("Item not found ", 404));
        return res.status(500).json({
            success: false,
            message: "Service not found"
        });
    }
    service1 = await Service.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: true,
    });
    res.status(200).json({
        success: true,
        service1,
    });

}
