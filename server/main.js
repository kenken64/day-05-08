// Include express module
var express = require("express");

// Create APP
var app = express();

// CREATE a config for PORT
const PORT = 3000;


// Start server on PORT
app.listen(PORT, function () {
    console.log("Running server on http://localhost:%s", PORT);
});