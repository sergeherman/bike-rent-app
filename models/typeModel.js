
function getAllTypes(callback) {
    //Get all bike types from the database
    var results = {
        types: [
            {id:1, name:"BMX"},
            {id:2, name:"mountain"},
            {id:3, name:"road"}
        ]
    }
    callback(null, results);
}

function getTypeById(id, callback) {
    //Get all bike types from the database that matches the id
    var results =  {id:id, name:"BMX"} ;
    callback(null, results);
    
}

function insertNewType(name, callback) {
    //Create new bike types in the database with provided name
    var results =  {success: true} ;  
    callback(null, results);
}

module.exports = {
    getAllTypes: getAllTypes,
    getTypeById: getTypeById,
    insertNewType: insertNewType

};

