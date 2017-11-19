//There are only 2 route for the files.
//One is /api/imagesearch/:searhcterm ---> search the image api for itme.
//Other is /api/latest/imagesearch/ --> This gives the history
var urlquery = require("../modules/query.js")


module.exports = function(app){
  
  var newSearch = require("../modules/new.js")
  
  // var newFile = require("/modules/new.js/") // this will get a new file
  // var query = require("/modules/query.js") //this will handle query searches
  
  
  //this route for is for searches with offset values
  app.route("/api/imagesearch/" + ":searchterm" + "&offset=" + ":offset")
        .get(function(req, res){
            var searchterm = req.params.searchterm
            var offset = req.params.offset
            newSearch.search(searchterm, offset, function(err, data){
              if(err){return console.error(err)}
              else {
                urlquery.url_new(searchterm)
                res.json(data)
              }
      })
  })  
  
  
  // this route is for image search with specific offset path
  app.route("/api/imagesearch/:searchterm")
    .get(function(req, res){
        var searchterm =  req.params.searchterm
        newSearch.search(searchterm, 0, function(err, data){
          if(err){return console.error(err)}
          else {
            urlquery.url_new(searchterm)
            res.json(data)
          }
      })
  })
  
    //callback function on the new.js search option
       //Need to write the code for this route
  
  app.route("/api/latest/imagesearch/")
    .get(urlquery.url_query)
    //.get requires a callback function
    //Need to write the code for this route
}