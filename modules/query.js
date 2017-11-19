var mongoose = require("mongoose"), mongooseSchema = require("../models/models.js")

var urlmodel = mongooseSchema.model("urlModel")

module.exports = {
  
  url_query: function(req, res){
    urlmodel.find({}, "term when -_id").sort("-when").limit(10).exec(function(err, searchurl){
      if(err){console.error(err)}
      console.log(typeof searchurl)
      res.json(searchurl)
    })
  },
  
  url_new: function(searchterm){
    var search = new urlmodel({
      term: searchterm,
      when: new Date()
    })
    
    search.save(function(err){
      if (err){console.error(err)}
      else {
        console.log("A new url has been saved!!")
      }
    })
  }
}
