const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
Email:{
    type:String
},
Password:{
    type:String
},
Name:{
    type:String
},
});

module.exports = mongoose.model("userModel", userSchema);
