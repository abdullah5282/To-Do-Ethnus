const mongoose = require("mongoose");
const express = require("express");
const app = express();
const taskRoute = require("./controller/taskRoute")
const bodyParser = require("body-parser")
const cors = require("cors")
mongoose.set("strictQuery", true);
require("dotenv").config();
const PORT = process.env.PORT || 4000
// mongoose.connect(
// // mongodburl= "mongodb+srv://mayank123:mayank123@cluster0.hfooxct.mongodb.net/taskdb"
// );
// var db = mongoose.connection;
// db.on("open", () => console.log("Connected to Db"));
// db.on("error", () => console.log("Not Connected to Db"));

mongoose
  .connect(process.env.mongodburl)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use("/taskRoute", taskRoute);



// app.listen(4000, () => {
//   console.log("Server started at 4000");
// });
app.listen(PORT, () => console.log(`Listening at ${PORT}...`));