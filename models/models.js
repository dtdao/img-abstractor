//This is a model to help store search for items into the mongoDB

var mongoose = require("mongoose")
var schema = mongoose.Schema


///this is the schema
var urlSchema = new schema({
  term: String,
  when: String
})

//the model
var urlModel = mongoose.model("urlModel", urlSchema)

module.exports = urlModel
