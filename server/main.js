// Include express module
var express = require("express");

// Create APP
var app = express();

// CREATE a config for PORT
const PORT = 3000;
const CLIENT_FOLDER = __dirname + "/../client";

console.log("Serving Client folder at ", CLIENT_FOLDER);

app.use(express.static(CLIENT_FOLDER));


app.use(function (err, req, res, next) {
    res.redirect("/501.html");
});


// Start server on PORT
app.listen(PORT, function () {
    console.log("Running server on http://localhost:%s", PORT);
});

