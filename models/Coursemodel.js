const mongoose=require("mongoose");
const CourseSchema=mongoose.Schema({
  name:{
    type:String
  },
  price:{
    type:Number
  },
  category:{
    type:String
  },
  image:{
    String
  },
  title:{
    type:String
  }

})
const Course=mongoose.model("card",CourseSchema);

module.exports=Course;