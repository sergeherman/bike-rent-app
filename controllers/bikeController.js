const bikeModel = require("../models/bikeModel.js");

function search(req, res) {
    //TODO: check if order id or if type id, and call the approptiate function...

    var order = req.query.order;
    bikeModel.searchByOrder(order, function(error,results) {
        res.json(results);
    });

    // var typeId; //TODO: comes from the query
    // bikeModel.searchByOrder(typeId, function(error,results) {
    //     res.json(results);
    // });
}

function getBikeList(req, res) {
    bikeModel.getAllBikes(function(error,results) {
        res.json(results);
    });    
}

function getBike(req, res) {
    var id=1; //TODO: comes from the query
    bikeModel.getBikeById(id, function(error,results) {
        res.json(results);
    });
}

function insertNewBike(req, res) {
    var order = "testOrder";
    var chapter = 3;
    var verse =16;
    var content = "test content";
    bikeModel.insertNewBike(order, chapter, verse, content, function(error,results) {
        res.json(results);
    });
}

function assignTypeToBike(req, res) {
    var typeId =1;
    var bikeId = 1;

    bikeModel.assignTypeToBike(typeId, bikeId, function(error,results) {
        res.json(results);
    });
}

module.exports = {
    search: search,
    getBikeList: getBikeList,
    getBike: getBike,
    insertNewBike: insertNewBike,
    assignTypeToBike: assignTypeToBike
};

