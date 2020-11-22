
const express = require('express');
const app = express();
const morgan = require("morgan");

//bring in routes
const postRoutes = require('./routes/post');

//middleware
app.use(morgan("dev"));

app.use("/" , postRoutes);
const port = 8080;
app.listen(port, () => {
    console.log('ANode Jc API is listening on port: ${port}');
});