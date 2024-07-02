//creating SERVER

let express = require("express");
let app = express();
let dotenv = require("dotenv");
let cors = require("cors");
let colors = require("colors");
let morgan = require("morgan");
//configuration of dotnet
dotenv.config();
//app-level middleware
app.use(express.json());
//third-Party middleware
app.use(cors());
app.use(morgan());
//port
let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`surver is runing at ${PORT}`.bgYellow.red);
});

// console.log(object);
