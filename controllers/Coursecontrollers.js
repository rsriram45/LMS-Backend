const Course = require("../models/Coursemodel");



const getUser = async (req, res) => {
  try {
    const get = await Course.find();
    res.status(200).json(get);
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json(error);
  }
};


const Postuser = async (req, res) => {
  const card = new Course({
    name: req.body.name,
    title: req.body.title,
    price: req.body.price,
    category: req.body.category,
    image: req.body.image,
  });

  try {
    const newCard = await card.save();
    res.status(201).json(newCard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const Updateuser = async (req, res) => {
  try {
    const updatedCard = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedCard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const Deleteuser = async (req, res) => {
  try {
    await Card.findByIdAndRemove(req.params.id);
    res.json({ message: "Deleted card" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getUser,
  Postuser,
  Updateuser,
  Deleteuser


};
