'use strict'
const mongoose = require("mongoose");


var digimonSchema =  new mongoose.Schema ({

name : String,
level: String,
image: String

})
 
const digimonModel = mongoose.model('digimon',digimonSchema);


module.exports={
    digimonModel
}