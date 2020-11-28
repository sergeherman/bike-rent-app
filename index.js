const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 5000;

var app = express();

app.use(express.static(path.join(__dirname, "public")));
//support json encoded bodies
app.use(express.json());
//support url encoded bodies
//app.use(express.urlencoded.apply({extended: true}));
app.use(express.urlencoded({ extended: true }));
app.get("/types", function(req, res) {
    // get the list of all beke types
    console.log("Getting all byke types...");

    var results = {
        types: [
            {id:1, name:"bmx"},
            {id:2, name:"mountain"},
            {id:3, name:"road"}
        ]
    }
    res.json(results);

});

app.get("/type", function(req, res) {
    //get a single bike type by id
    // /type?id=1
    var id = req.query.id;
    // /type/xxxxxxx
    //var id = req.params.id;

    console.log("Getting bike type with id: " + id);
 

    var results =  {id:id, name:"bmx"} ;     
    res.json(results);

});

app.post("/type", function(req, res) {
    var name = req.body.name;
    console.log("Creating a new bike type with name: " + name);

    res.json({success: true});
});

app.listen(PORT, function() {
    console.log("Server listening on port " + PORT);
});



    
