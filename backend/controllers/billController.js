const Bill = require("../models/billmodel");

exports.createBill = (async (req, res, next) => {
    const bill = await Bill.create(req.body);

    res.status(201).json({
        success: true,
        bill,

    });
});


exports.getAllBills = async (req, res) => {
    const bills = await Bill.find();
    res.status(200).json({
        success: true,
        bills,
    });

}

// get single item 

exports.getSingelBill = async (req, res, next) => {
    const bill = await Bill.findById(req.params.id);

    if (!bill) {
        return res.status(500).json({
            success: false,
            message: "Bill not Found"
        });
    }

    res.status(200).json({
        success: true,
        bill,
    })

};




exports.updatebill = async (req, res, next) => {
    let bill = await Bill.findById(req.params.id);

    if (!bill) {

        return res.status(500).json({
            success: false,
            message: "Bill not Found"
        });
    }
    bill = await Bill.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({
        success: true,
        bill,
    });

}


exports.deleteBill = async (req, res, next) => {

    console.log(res.params)
    const bill = await Bill.findById(req.params.id);


    if (!bill) {
        return next(new ErrorHandler("Bill not found ", 404));
    }

    // ==========================================================================

    // another trick to delete one record

    await bill.deleteOne({ _id: req.params.id });

    //   ===========================================================================

    // await Item.findOneAndDelete();

    res.status(200).json({
        success: true,
        message: "Bill delete successfully",
    });
};