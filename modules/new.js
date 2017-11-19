var https = require("https")

//need to hide this
let subscriptionKey = process.env.SUB_SECRET
let host = 'api.cognitive.microsoft.com';
let path = '/bing/v7.0/images/search';


module.exports = {
  search: function(searchterm, offset, callback){
    var term = searchterm 
    
    let request_param = {
      method: "GET",
      host: host,
      ///&count=10  returns only 10 results at a time fix number
      path: path + '?q=' + encodeURIComponent(term) + '&offset=' + encodeURIComponent(offset) + '&count=' + encodeURIComponent(10),
      headers : {
              'Ocp-Apim-Subscription-Key' : subscriptionKey,  
          },
    }
    
    https.request(request_param, function(res){
      
      var body = ""
      res.on("data", function(data){
        body += data
      })
      res.on("error", function(err){
        console.log("error " + err.message)
      })
      res.on("end", function(){
        callback(null, json_filter_handler(JSON.parse(body)["value"]))  ///object
        
      })
      
    }).end()
  }
}


function json_filter_handler(json){ //json object
  var holder = [];
  for(var i = 0; i < json.length; i++){
    holder.push({
      url: json[i].contentUrl,
      snippet: json[i].name,
      thumbnail: json[i].thumbnailUrl,
      context: json[i].hostPageUrl
    })
  }
  return holder
}


  