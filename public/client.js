// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html
$(document).ready(function(){
  var searchbox = ""
  $(".search-button").click(function(){
    searchbox = $(".search-box").val()
    if(searchbox != ""){
      window.open("https://img-abstractor.glitch.me/api/imagesearch/" + searchbox + "&offset=1", "_self")
    }
  })
  
  $(".search-box").keyup(function(event){
    searchbox = $(".search-box").val()
    if(searchbox != "" & event.which === 13){
      window.open("https://img-abstractor.glitch.me/api/imagesearch/" + searchbox + "&offset=1", "_self");
    }
  })
})
