var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tables = [
    {
        name: "anibal",
        email: "anibal@anibal.com",
        phone: "3236343",
        uniqueID: 1,
      }
]

var reservations = [

    {
        name: "patrick",
        email: "patrick@patrick.com",
        phone: "3234343",
        uniqueID: 2,
    },
    {
        name: "kathy",
        email: "kathy@kathy.com",
        phone: "43324234",
        uniqueID: 4,
    }
  ];


app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });

app.get("/api/tables", function(req, res) {
    return res.json(tables);
 });

  app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });

app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newreservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
   newreservation.name = newreservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newreservation);
  
    if (tables.length < 5) {
    tables.push(newreservation);
    }
    else {
    reservations.push(newreservation);
    }
    res.json(newreservation);
    

  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });