const Feedback = require("../models/feedbackmodels");
const Query= async (req, res) => {
  try {
    const { issue, email, contactNo, query } = req.body;
    const feedbacks = new Feedback({ issue, email, contactNo, query });
    await feedbacks.save();
    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports=Query;