let express=require("express");
let router=express.Router();
let apiCalls=require('../Controller/export')

router.post("/signup",apiCalls.signup);
router.post("/login",apiCalls.login);
router.get("/findAllUsers",apiCalls.findAllUsers);
router.all("*",apiCalls.invalid);

module.exports=router;