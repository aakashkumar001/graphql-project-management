const mongoose = require("mongoose");

const ClientSchema = new mongoose({
      name:{
        type:String,
    },
    email:{
      type:String,
    },
    phone:{
       type:Number,
    },
});

module.exports = mongoose.model("Client", ClientSchema);