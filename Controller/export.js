let mongoose=require("../Model/mongoose");

exports.findAllUsers=async(req,res)=>{
    try{
        let allUserData=await mongoose.find();
        if(allUserData.length>0){
            res.status(200).json({
                status:"Success",
                data:allUserData
            })
        }else{
            res.status(401).json({
                status:"Failure",
                message:"User data not found"
            })
        }
    }catch(err){
        res.status(400).json({
            status:"Failure",
            message:"Api call failure"
        })
    } 
}

exports.signup=async(req,res)=>{
    let requestBody=req.body;
    mongoose.create(requestBody).then(()=>{
        res.status(200).json({
            status:"Success",
            message:"Login Success",
            data:requestBody
        })
    }).catch(()=>{
        res.status(400).json({
            status:"Failure",
            message:"Invalid data"
        })
    })
}

exports.login=async(req,res)=>{
    try{
        let loginData=req.body;
        let login=await mongoose.findOne({emaiId:loginData.emaiId,password:loginData.password});
        if(login){
            res.status(200).json({
                status:"Success",
                data:loginData
            })
        }else{
            res.status(401).json({
                status:"Failure",
                message:"Invalid login data"
            })
        }

    }catch(err){
        res.status(400).json({
            status:"Failure",
            message:"Login Api failure"
        })
    }
}


exports.invalid=async(req,res)=>{
    res.status(400).json({
        status:"Invalid",
        message:"Check the URL"
    })
}