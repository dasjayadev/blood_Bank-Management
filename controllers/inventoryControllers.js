const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/user");
//this is for the create-inventory
let createInventoryController = async (req, res, next) => {
  try {
    let { email, invetoryType } = req.body;
    if (!email || !invetoryType)
      res
        .status(401)
        .send({ message: "All field are requierd *", success: false });
    let user = await userModel.findOne({ email });
    if (!user) throw new Error("User Not Found");
    // if (user.role === "doner" && invetoryType != "in")
    //   throw new Error("Not a User Account");
    if (user.role == "hospital" && invetoryType != "out")
      throw new Error("not a hospitsl user");
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
//this is for the getting -inventory
let getInventoryController = async (req, res, next) => {
  try {
    if (!req.userId)
      return res.status(401).send({ message: "Not Vallide" });
    let inventory = await inventoryModel
      .find({ organisation: req.userId})
      .populate("donar")
      .populate("hospitsl")
      .sort({ createAt: -1 });
    res.status(200).send({
      message: "Inventory Result successfully",
      success: true,
      inventory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "somthing wrong while getting inventory",
      sucess: false,
    });
  }
};
module.exports = { createInventoryController, getInventoryController };
