let mongoose = require("mongoose");
let inventorySchema = new mongoose.Schema({
  inventoryType: {
    type: String,
    required: [true, "inventory type is required"],
    enum: ["in", "out"],
  },
  bloodGroup: {
    type: String,
    required: [true, "blood group is required"],
    emun: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
  },
  quantity: {
    type: String,
    required: [true, "quantity is required *"],
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: [true, "organization is required"],
  },
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: function () {
      return this.inventoryType === "out";
    },
  },
  doner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: function () {
      return this.inventoryType === "in";
    },
  },
});
module.exports = mongoose.model("inventory", inventorySchema); 
