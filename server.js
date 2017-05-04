// DEPENDENCIES
var express = require('express');
var cors = require("cors");
var bodyParser = require("body-parser");

// SETUP
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// START SERVER
const port = process.env.PORT || 8000;
app.listen(port);
console.log("Server listening on port: " + port);