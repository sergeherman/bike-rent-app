const typeModel = require("../models/typeModel.js");

function getTypeList(req, res) {
    // get the list of all beke types
    console.log("Getting all byke types...");
    typeModel.getAllTypes(function(error, results) {

        res.json(results);
    });
   
}

function getType(req, res) {
    //get a single bike type by id
    // /type?id=1
    var id = req.query.id;
    // /topic/xxxxxxx
    //var id = req.params.id;

    console.log("Getting bike type with id: " + id);
    typeModel.getTypeById(id, function(error, results) {
       res.json(results); 
    });   
    
} 

function postType(req, res) {
    var name = req.body.name;
    console.log("Creating a new bike type with name: " + name);
    typeModel.insertNewType(name, function(error, results) {
      res.json(results);  
    });  
    
}

module.exports = {
    getTypeList: getTypeList,
    getType: getType,
    postType: postType

};