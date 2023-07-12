const RoomCategory = require("../models/roomcategory");

// create student --Admin
exports.createCategoryRoom = (async (req, res, next) => {
    const categoryroom = await RoomCategory.create(req.body);

    res.status(201).json({
        success: true,
        categoryroom
    });
});




exports.getAllCategoryRoom = async (req, res) => {
    const rooms = await RoomCategory.find();
    res.status(200).json({
        success: true,
        rooms
    });

}

// get single categoryroom 
exports.getCategoryRoomDetail = async (req, res, next) => {
    const categoryroom = await RoomCategory.findById(req.params.id);

    if (!categoryroom) {
        return res.status(500).json({
            success: false,
            message: "categoryroom not Found"
        });
    }

    res.status(200).json({
        success: true,
        categoryroom,
    })

};

exports.updateCategoryRoom = async (req, res, next) => {
    let editroom = await RoomCategory.findById(req.params.id);

    if (!editroom) {
        // return next(new ErrorHandler("Item not found ", 404));
        return res.status(500).json({
            success: false,
            message: "categoryroom not Found"
        });
    }
    editroom = await RoomCategory.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({
        success: true,
        editroom,
    });

}


exports.deleteCategoryRoom = async (req, res, next) => {

    // req.body.student=req.student.id
    const categoryroom = await RoomCategory.findById(req.params.id);
  
    if (!categoryroom) {
      return next(new ErrorHandler("categoryroom not found ", 404));
    }
  
    // ==========================================================================
  
    // another trick to delete one record
  
    await categoryroom.deleteOne({_id:req.params.id});
  
    //   ===========================================================================
  
    // await categoryroom.findOneAndDelete();
  
    res.status(200).json({
      success: true,
      message: "categoryroom delete successfully",
    });
  } ;
