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
app.get("/topics", function(req, res) {
    // get the list of all beke types
    console.log("Getting all byke types...");

    var results = {
        topics: [
            {id:1, name:"bmx"},
            {id:2, name:"mountain"},
            {id:3, name:"road"}
        ]
    }
    res.json(results);

});

app.get("/topic", function(req, res) {
    //get a single bike type by id
    // /type?id=1
    var id = req.query.id;
    // /topic/xxxxxxx
    //var id = req.params.id;

    console.log("Getting bike type with id: " + id);
 

    var results =  {id:id, name:"bmx"} ;     
    res.json(results);

});

app.post("/topic", function(req, res) {
    var name = req.body.name;
    console.log("Creating a new bike type with name: " + name);

    res.json({success: true});
});

app.listen(PORT, function() {
    console.log("Server listening on port " + PORT);
});



    