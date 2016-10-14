// Include express module
var express = require("express");

// Create APP
var app = express();

// CREATE a config for PORT
const PORT = 3000;
const CLIENT_FOLDER = __dirname + "/../client";

console.log("Serving Client folder at ", CLIENT_FOLDER);

app.use(express.static(CLIENT_FOLDER));

app.get("/showReq", function (req, res) {
    var reqProperties = {
        hostName: req.hostName,
        baseUrl: req.baseUrl,
        cookies: req.cookies,
        ip: req.ip,
        secure: req.secure
    };
    // Solution 4a
    console.log(reqProperties);

    // Solution 4b - you can also use .send and pass a string
    res.json(reqProperties);
});


app.get("/sample", function (req, res) {
    res.json({
        ok: true
    })
});
app.put("/sample", function (req, res) {
    res.json({
        ok: true
    })
});
app.post("/sample", function (req, res) {
    res.json({
        ok: true
    })
});



// Solution 5a - 404 Handler
app.use(function (req, res) {
    res.redirect("/404.html");
});

// Solution 5b - 501 or error Handler
app.use(function (err, req, res, next) {
    res.redirect("/501.html");
});

// Start server on PORT
app.listen(PORT, function () {
    console.log("Running server on http://localhost:%s", PORT);
});

