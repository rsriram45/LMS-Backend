const mongoose=require("mongoose");
const FeedbackSchema=mongoose.Schema({
  issue: String,
  email: String,
  contactNo: String,
  query: String
})
const Feedback=mongoose.model("query",FeedbackSchema);

module.exports=Feedback;