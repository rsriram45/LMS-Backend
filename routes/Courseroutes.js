const express = require("express");
const router = express.Router();
const {
  getUser,
  Postuser,
  Updateuser,
  Deleteuser
}=require("../controllers/Coursecontrollers");


router.get("/get",getUser)
router.post("/post",Postuser)
router.put("/put",Updateuser)
router.delete("/delete",Deleteuser)


module.exports=router;