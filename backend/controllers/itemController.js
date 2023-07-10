const Item = require("../models/itemModel");
const ApiFeatures = require("../utils/apifeatures");



// create student --Admin
exports.createItem = (async (req, res, next) => {
    const item = await Item.create(req.body);

    res.status(201).json({
        success: true,
        item,
    });
});


exports.getAllitems = async (req, res) => {


    const apiFeature = new ApiFeatures(Item.find(), req.query).search().filter();

    const items = await apiFeature.query;
    res.status(200).json({
        success: true,
        items,
    });

}

// get single item 

exports.getItemDetail = async (req, res, next) => {
    const item = await Item.findById(req.params.id);

    if (!item) {
        return res.status(500).json({
            success: false,
            message: "Item not Found"
        });
    }

    res.status(200).json({
        success: true,
        item,
    })

};

exports.updateitem = async (req, res, next) => {
    let item = await Item.findById(req.params.id);

    if (!item) {
        // return next(new ErrorHandler("Item not found ", 404));
        return res.status(500).json({
            success: false,
            message: "Item not Found"
        });
    }
    item = await Item.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({
        success: true,
        item,
    });

}


exports.deleteItem = async (req, res, next) => {

    // req.body.student=req.student.id
    console.log(res.params)
    const item = await Item.findById(req.params.id);


    if (!item) {
        return next(new ErrorHandler("Item not found ", 404));
    }

    // ==========================================================================

    // another trick to delete one record

    await item.deleteOne({ _id: req.params.id });

    //   ===========================================================================

    // await Item.findOneAndDelete();

    res.status(200).json({
        success: true,
        message: "Item delete successfully",
    });
};