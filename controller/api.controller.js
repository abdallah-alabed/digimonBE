'use strict'
const {apiModel} = require('../model/api.model')
const axios =require("axios");



let handleDigimon=async(req, res) =>{
    
    let url = `https://digimon-api.vercel.app/api/digimon`;
    console.log(url);
    let response = await axios.get(url);
    let digimonData = response.data;
    res.status(200).json(digimonData)
}




module.exports={
    handleDigimon};