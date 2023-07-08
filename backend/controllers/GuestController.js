
const Guest = require("../models/guestModel");




// create student --Admin
exports.createGuest = (async (req, res, next) => {
    const guest = await Guest.create(req.body);

    res.status(201).json({
        success: true,
        guest
    });
});




exports.getAllGuest = async (req, res) => {
    const gue = await Guest.find();
    res.status(200).json({
        success: true,
        gue
    });

}


// Get single student
exports.getGuestDetail = async (req, res, next) => {
    const guest = await Guest.findById(req.params.id);

    if (!guest) {


        return res.status(500).json({
            success: false,
            message: "Guest not found",
        });
    }
    res.status(200).json({
        success: true,
        guest,
    });
};


// router.get("/:id", async(req,res)=>{
    
//     try{
//         const GetIDGuest= await Guest.findById(req.body.id);
//         res.status(200).json(GetIDGuest)
        
        
//     }catch (err){
//         res.status(500).json(err)

//     }
// })

exports.deleteGuest = async (req, res, next) => {

    // req.body.student=req.student.id
    const guest = await Guest.findById(req.params.id);

    if (!guest) {
        return next(new ErrorHandler("Guest not found ", 404));
    }

    // ==========================================================================

    // another trick to delete one record

    await guest.deleteOne({_id:req.params.id});

    //   ===========================================================================

    // await Guest.findOneAndDelete();

    res.status(200).json({
        success: true,
        message: "Guest delete successfully",
    });
};

exports.updateGuest = async (req, res, next) => {
    let gue1 = await Guest.findById(req.params.id);

    if (!gue1) {
        // return next(new ErrorHandler("Item not found ", 404));
        return res.status(500).json({
            success: false,
            message: "Itme not Found"
        });
    }
    gue1 = await Guest.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: true,
    });
    res.status(200).json({
        success: true,
        gue1,
    });

}
