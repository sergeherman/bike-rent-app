const {Pool} = require("pg");

const db_url = process.env.DATABASE_URL ;
console.log("DB URL: " + db_url);
const pool = new Pool({connectionString: db_url});

function searchByOrder(order, callback) {
    console.log("Searching the DB for order: " + order)
    var results = {list:[{id:1, order: order, chapter:1, verse: 2, content: "test content"},
   {id:1, order: order, chapter:1, verse: 2, content: "test content"},
   {id:1, order: order, chapter:1, verse: 2, content: "test content"}]};
    callback(null, results);
}

function searchByType(typeId, callback) {
    var results = {list:[{id:1, order: "testOrder", chapter:1, verse: 2, content: "test content"},
   {id:1, order: "testOrder", chapter:1, verse: 2, content: "test content"},
   {id:1, order: "testOrder", chapter:1, verse: 2, content: "test content"}]};
    callback(null, results);
}


function getAllBikes(callback) {
    bikeModel.getAllBikes(function(results) {
        var results = {list:[{id:1, order: "testOrder", chapter:1, verse: 2, content: "test content"},
        {id:1, order: "testOrder", chapter:1, verse: 2, content: "test content"},
        {id:1, order: "testOrder", chapter:1, verse: 2, content: "test content"}]};
         callback(null, results);
    });    
}

function getBikeById(id, callback) {
        var results = {id:1, order: "testOrder", chapter:1, verse: 2, content: "test content"};
         callback(null, results);
}

function insertNewBike(order, chapter, verse, content, callback) {
    var results = {sucess: true, scripture:{id:1, order: order, chapter: chapter, verse: verse }};
    callback(null, results);
}

function assignTypeToBike(typeId, bikeId, callback) {
    var results = {sucess: true };
    callback(null, results);
}

module.exports = {
    searchByOrder: searchByOrder,
    searchByType: searchByType,
    getAllBikes: getAllBikes,
    insertNewBike: insertNewBike,
    assignTypeToBike: assignTypeToBike,
    getBikeById: getBikeById
};

