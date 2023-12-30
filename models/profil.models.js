const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProfilModel = new Schema({
  user:{
  type : Schema.Types.ObjectId,
  ref : "users",
  required:true
  }  ,
  tel: "String",
  city: "String",
  postalcode: "String",
  bio: "String",
  address : "String",
  },
  {timestamps : true}
);
 module.exports = mongoose.model('profiles',ProfilModel);