let mongoose=require("../Model/mongoose");

exports.invalid=async(req,res)=>{
    res.status(400).json({
        status:"Invalid",
        message:"Check the URL"
    })
}