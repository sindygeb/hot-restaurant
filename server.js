// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var customerArray = [
{
name: "",
phone: "",
email: "",
cust_ID: ""
}];

var waitlistArray = [
    {
    name: "",
    phone: "",
    email: "",
    cust_ID: ""
    }];

// Routes
// =============================================================

// Basic route that sends the user to the home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});


// Displays the table
app.get("/api/tables", function(req, res) {
    return res.json(customerArray);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitlistArray);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});