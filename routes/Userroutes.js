const express=require("express");
const router2=express.Router();
const{Signup,Login}=require("../controllers/Usercontrollers")

router2.post("/post",Signup);
router2.post("/login",Login)



module.exports=router2;