const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/user");
//this is for the create-inventory
let createInventoryController = async (req, res, next) => {
  try {
    let { email, inventoryType } = req.body;
    if (!email || !inventoryType)
      res
        .status(401)
        .send({ message: "All field are requierd *", success: false });
    let user = await userModel.findOne({ email });
    if (!user) throw new Error("User Not Found");
    if (req.body.inventoryType == "out") {
      req.body.hospital = user._id;
    } else {
      //inventoryType in
      req.body.doner = user._id;
    }

    // if (user.role === "doner" && inventoryType != "in")
    //   throw new Error("Not a User Account");
    // if (user.role == "hospital" && inventoryType != "out")
    //   throw new Error("not a hospitsl user");
    //save invemtory
    let inventory = new inventoryModel(req.body);
    await inventory.save();
    res.status(201).send({
      message: "Inventory created successfully",
      success: true,
      inventory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal server error",
      success: true,
      error,
    });
  }
};
//this is for the getting -inventory
let getInventoryController = async (req, res, next) => {
  try {
    if (!req.userId)
      return res.status(401).send({ message: "Not Vallide", success: false });
    let inventory = await inventoryModel
      .find({ organization: req.userId })
      .populate("doner")
      .populate("hospital")
      .sort({ createAt: -1 });
    // console.log("8888888888888888", inventory);
    res.status(200).send({
      message: "Inventory Result successfully",
      success: true,
      inventory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "somthing wrong while getting inventory",
      success: false,
    });
  }
};
module.exports = { createInventoryController, getInventoryController };
