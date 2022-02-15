let mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/LetsGo",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("DB connection is done")
});
let signupSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"Required field"]
    },
    lastName:{
        type:String,
        required:[true,"Required field"]
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    contactNumber:{
        type:Number,
        unique:true,
        required:true
    },
    emaiId:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        unique:true,
        required:[true,"Required field"]
    },
    confirmPassword:{
        type:String,
        required:[true,"Required Field"]
    },
})
let signupModel=mongoose.model("signuModel",signupSchema);
module.exports=signupModel;