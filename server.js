// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var router = express.Router()
var port = process.env.PORT || 8080
var routes = require("./routes/routes.js")
var mongoose = require("mongoose")

mongoose.Promise = global.Promise 

///nedd to hide this
mongoose.connect(process.env.SECRET)


app.use("", router)
app.use(express.static("public"))
app.use(express.static("views"))

routes(app)

app.get("views", function(req, res){
  res.sendFile(__dirname + "/index.html")
})

// listen for requests :)

app.listen(port, function() {
        console.log("Magic happens on " + port )
})