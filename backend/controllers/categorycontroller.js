const Category = require("../models/categorymodel");



// create category --Admin
exports.createCategory = (async (req, res, next) => {
    const category = await Category.create(req.body);

    res.status(201).json({
        success: true,
        category,

    });
});




exports.getAllcategories = async (req, res) => {
    const categories = await Category.find();
    res.status(200).json({
        success: true,
        categories,
    });

}

// get single item 

exports.getCategoryDetail = async (req, res, next) => {
    const category = await Category.findById(req.params.id);

    if (!category) {
        return res.status(500).json({
            success: false,
            message: "Category not Found"
        });
    }

    res.status(200).json({
        success: true,
        category,
    })

};




exports.updatecategory = async (req, res, next) => {
    let category = await Category.findById(req.params.id);

    if (!category) {
        return res.status(500).json({
            success: false,
            message: "Category not Found"
        });
    }
    category = await Category.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({
        success: true,
        category,
    });

}


exports.deleteCategory = async (req, res, next) => {

    // req.body.student=req.student.id
    console.log(res.params)
    const category = await Category.findById(req.params.id);
   

    if (!category) {
        return next(new ErrorHandler("Item not found ", 404));
    }

    // ==========================================================================

    // another trick to delete one record

    await category.deleteOne({_id:req.params.id});

    //   ===========================================================================

    // await Item.findOneAndDelete();

    res.status(200).json({
        success: true,
        message: "Category delete successfully",
    });
};