let express=require("express");
let router=express.Router();
let apiCalls=require('../Controller/export')

router.all("*",apiCalls.invalid);

module.exports=router;