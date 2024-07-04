let express = require("express");
const authorizeUser = require("../middleware/authMiddleware");
const {
  createInventoryController,
} = require("../controllers/inventoryControllers");
let inventoryRoute = express.Router();
//create-inventory || POST
inventoryRoute.post(
  "/create-inventory",
  authorizeUser,
  createInventoryController
);
module.exports = inventoryRoute;
