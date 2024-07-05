//creating SERVER

let express = require("express");
let app = express();
let dotenv = require("dotenv");
let cors = require("cors");
let colors = require("colors");
let morgan = require("morgan");
const databaseConnections = require("./config/db");
const route = require("./routes/auth");
const inventoryRoute = require("./routes/inventoryRoute");
//configuration of dotnet
dotenv.config();
//app-level middleware
app.use(express.json());
//third-Party middleware
app.use(cors());
app.use(morgan());
//dataBase Connections
databaseConnections();
//route -level middleware
app.use("/auth/v1", route);
app.use("/inventory/v1", inventoryRoute);
//port
let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`surver is runing at ${PORT}`.bgYellow.red);
});

// console.log(object);
