
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
const express = require("express");
const path = require("path");
require('dotenv').config();
const typeController = require("./controllers/typeController.js");
const bikeController = require("./controllers/bikeController.js");

const PORT = process.env.PORT || 5000;

var app = express();

app.use(express.static(path.join(__dirname, "public")));
//support json encoded bodies
app.use(express.json());
//support url encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get("/types", typeController.getTypeList);
app.get("/type", typeController.getType);
app.post("/type", typeController.postType);

app.get("/search", bikeController.search);
app.get("/bikes", bikeController.getBikeList);
app.get("/bike", bikeController.getBike);
app.post("/bike", bikeController.insertNewBike);
app.post("/assignTypeToBike", bikeController.assignTypeToBike);


app.listen(PORT, function() {
    console.log("Server listening on port " + PORT);
});



    