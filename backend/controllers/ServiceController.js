
const RoomService = require("../models/serviceModel");



// create student --Admin
exports.createRoomservice = (async (req, res, next) => {
    const roomservice = await RoomService.create(req.body);

    res.status(201).json({
        success: true,
        roomservice,
    });
});




exports.getAllRoomservice= async (req, res) => {
    const roomservice = await RoomService.find();
    res.status(200).json({
        success: true,
        roomservice,
    });

}


// Get single student
exports.getRoomserviceDetails = async (req, res, next) => {
    const roomservice = await RoomService.findById(req.params.id);

    if (!roomservice) {


        return res.status(500).json({
            success: false,
            message: "Service not found",
        });
    }
    res.status(200).json({
        success: true,
        roomservice,
    });
};


exports.deleteRoomservice = async (req, res, next) => {

    const roomservice = await RoomService.findById(req.params.id);

    if (!roomservice) {
        return next(new ErrorHandler("Service not found ", 404));
    }

    // ==========================================================================

    // another trick to delete one record

    await roomservice.deleteOne({_id:req.params.id});

    //   ===========================================================================

    // await Guest.findOneAndDelete();

    res.status(200).json({
        success: true,
        message: "Service delete successfully",
    });
};

exports.updateRoomservice = async (req, res, next) => {
    let roomservice1 = await RoomService.findById(req.params.id);

    if (!roomservice1) {
        // return next(new ErrorHandler("Item not found ", 404));
        return res.status(500).json({
            success: false,
            message: "Service not found"
        });
    }
    roomservice1 = await RoomService.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: true,
    });
    res.status(200).json({
        success: true,
        roomservice1,
    });

}
