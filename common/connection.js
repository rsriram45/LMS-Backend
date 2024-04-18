const mongoose=require("mongoose");
const Mongo_URL= "mongodb+srv://srirampeter45:BHDUkWkU4YkB3FUY@sriram45.0bfryh6.mongodb.net/?retryWrites=true&w=majority&appName=Sriram45";
const connect=()=>{
  mongoose.connect(Mongo_URL)
  .then(()=>{
    console.log("MongoDB connected...")
  })
  .catch((err)=>{
    console.log("connection error:",err.message)
  })
}
module.exports=connect;