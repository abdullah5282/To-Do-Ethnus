const mongoose = require("mongoose")
const taskSchema = new mongoose.Schema({
  "tasks":{type:String},
  "dis":{type:String}
},{
  collection:"todo"
})

 module.exports = mongoose.model("taskSchema",taskSchema);
