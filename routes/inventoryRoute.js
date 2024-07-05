let express = require("express");
const authorizeUser = require("../middleware/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
} = require("../controllers/inventoryControllers");
let inventoryRoute = express.Router();
//create-inventory || POST
inventoryRoute.post(
  "/create-inventory",
  authorizeUser,
  createInventoryController
);
//get-inventory || GET
inventoryRoute.get("/get-inventory", authorizeUser, getInventoryController);
module.exports = inventoryRoute;
