const { Pool } = require("pg");

const db_url = process.env.DATABASE_URL ;

console.log("DB URL: " + db_url);
const pool = new Pool({connectionString: db_url});

function searchByOrder(orders, callback) {
    console.log("Searching the DB for orders: " + orders)

    // var sql = "SELECT id, orders, chapter, verse, content FROM bike WHERE orders=$1::text";
    // var params = [orders];
    var sql = "SELECT id, orders, chapter, verse, content FROM bike";  
    // pool.query(sql, params, function(err, db_results) {
        pool.query(sql, function(err, db_results) {
        if (err) {
            throw err;
        } else {
            // We got some successfull results from the DB
            console.log("Back from the DB with: " )
            console.log(db_results);

            var results = {
                success:true,
                list:db_results.rows
            //     list:[{id:1, orders: orders, chapter:1, verse: 2, content: "test content"},
            // {id:1, orders: orders, chapter:1, verse: 2, content: "test content"},
            // {id:1, orders: orders, chapter:1, verse: 2, content: "test content"}
        };
             callback(null, results);
        }
    });

}

function searchByType(typeId, callback) {
    var results = {list:[{id:1, orders: "testOrder", chapter:1, verse: 2, content: "test content"},
   {id:1, orders: "testOrder", chapter:1, verse: 2, content: "test content"},
   {id:1, orders: "testOrder", chapter:1, verse: 2, content: "test content"}]};
    callback(null, results);
}


function getAllBikes(callback) {
    bikeModel.getAllBikes(function(results) {
        var results = {list:[{id:1, orders: "testOrder", chapter:1, verse: 2, content: "test content"},
        {id:1, orders: "testOrder", chapter:1, verse: 2, content: "test content"},
        {id:1, orders: "testOrder", chapter:1, verse: 2, content: "test content"}]};
         callback(null, results);
    });    
}

function getBikeById(id, callback) {
        var results = {id:1, orders: "testOrder", chapter:1, verse: 2, content: "test content"};
         callback(null, results);
}

function insertNewBike(orders, chapter, verse, content, callback) {
    var results = {sucess: true, scripture:{id:1, orders: orders, chapter: chapter, verse: verse }};
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

