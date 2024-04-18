const express = require("express");
const fedrouter = express.Router();
const Query=require("../controllers/Feedbackcontrollers");


fedrouter.post("/fed",Query)

module.exports=fedrouter;