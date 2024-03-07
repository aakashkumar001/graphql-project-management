const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
      name:{
        type:String,
    },
    description:{
      type:String,
    },
    status:{
       type:String,
       enum:["Not Started", "In progress", "Completed"],
    },
    ClientId:{
        type: mongoose.Schema.ObjectId,
        ref:"Client",
    },
});

module.exports = mongoose.model("Project", ProjectSchema);