const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/user");

let createInventoryController = async (req, res, next) => {
  try {
    let { email, invetoryType } = req.body;
    if (!email || !invetoryType)
      res
        .status(401)
        .send({ message: "All field are requierd *", success: false });
    let user = await userModel.findOne({ email });
    if (!user) throw new Error("User Not Found");
    if (user.role == "doner" && invetoryType != "in")
      throw new Error("Not a User Account");
    if (user.role == "hospital" && invetoryType != "out")
      throw new Error("not a hhospitsl user");
    //save invemtory
    let invetory = new inventoryModel(req.body);
    await invetory.save();
    res.status(201).send({
      message: "Inventory created successfully",
      success: true,
      invetory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal server error",
      sucess: true,
      error,
    });
  }
};

module.exports = { createInventoryController };
