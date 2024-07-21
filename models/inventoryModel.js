let mongoose = require("mongoose");
let inventorySchema = new mongoose.Schema({
  invetoryType: {
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
  organisation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: [true, "organisation is required"],
  },
  hospitsl: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: function () {
      return this.invetoryType === "out";
    },
  },
  donar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    // required: function () {
    //   return this.invetoryType === "in";
    // },
  },
});
module.exports = mongoose.model("inventory", inventorySchema);
