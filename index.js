const express=require("express");
const dotenv = require("dotenv");
const connect = require("./common/connection");
const router = require("./routes/Courseroutes");
const router2=require("./routes/Userroutes");
const fedrouter=require("./routes/Feedbackroutes");
const cors=require("cors");
const app = express();
app.use(express.json());
app.use(router);
app.use(router2);
app.use(fedrouter);
app.use(cors());


dotenv.config();
connect();
const PORT = process.env.PORT || 5000;

app.use("/", (req, res) => {
  res.send("This is backend");
});

app.listen(PORT, () => {
  console.log("server is running:", PORT);
});



