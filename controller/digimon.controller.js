'use strict'
const { digimonModel } = require('../model/digimon.model')

let digimonController = (req, res) => {
    digimonModel.find({}).then((data) => {
        res.json(data);
    })
}

const deleteDigimonController = (req, res) => {
    let id = req.params.id;
    digimonModel.findByIdAndDelete(id, async (err, data) => {
        if (err) {
            res.status(500).send("an error occured");
        }
        let digimonList = await digimonModel.find({});
        res.json(digimonList);
    });
};

const updateDigimonController = async (req, res) => {
        let id = req.params.id;
        let { name,level } = req.body;
        digimonModel.findOne({ _id: id }).then((e) => {
          e.name = name;
          e.level=level;
        
          e.save();
        });
        let digimonList = await digimonModel.find({});
        res.status(200).send(digimonList);
      };
   
const addDigimonController = async (req, res) => {
    let { name, level, img } = req.body;
    let newFav = new digimonModel({
        name : name,
        level: level,
        image: img
    });
    newFav.save();

    let digimonList = await digimonModel.find({});
    res.status(201).json(digimonList);

}


module.exports = {
    digimonController,
    updateDigimonController,
    deleteDigimonController,
    addDigimonController
}