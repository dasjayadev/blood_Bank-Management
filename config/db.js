let mongoose = require("mongoose");
let colors = require("colors");
let databaseConnections = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/blood`);
    console.log(`Database connected sucessfuly`.bgMagenta.white);
  } catch (err) {
    console.log(`somthing wrong in database connection`.bgWhite.black);
  }
};
module.exports = databaseConnections;
