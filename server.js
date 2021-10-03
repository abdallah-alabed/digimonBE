"use strict";
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
require("dotenv").config();
app.use(express.json());
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const ATLAS = process.env.ATLAS;
const {
  digimonController,
  updateDigimonController,
  deleteDigimonController,
  addDigimonController
} = require("./controller/digimon.controller");

const{handleDigimon}=require('./controller/api.controller')

mongoose.connect(`http://${ATLAS}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/api',handleDigimon);

app.get("/digimon",digimonController)
app.post("/addDigimon",addDigimonController)
app.put("/updateDigimon/:id",updateDigimonController)
app.delete("/deleteDigimon/:id",deleteDigimonController)

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});
