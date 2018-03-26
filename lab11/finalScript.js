$(function(){
  $('#searchform').submit(function(){
    var searchterms = $("#searchterms").val();
    //call out search youtube function
    getResultsFromOMBD(searchterms);
    return false;
  });
});
function getResultsFromOMBD (searchterms){
  //call youtube API using ajax
  //build URL for the request
  var url = "http://www.omdbapi.com/?apikey=58f8f533&s=" + searchterms;
  //use jquery json shortcut
  $.getJSON(url,function(jsondata) {
    //handle the results
    addResultTitles(jsondata);
  });
}
function addResultTitles(jsondata){
  //create a string to contain our HTML code to inject
  var htmlstring="";
  //iterate over the collection of results
  for(var i=0;i<10;i++){
    var title = jsondata.Search[i].Title;
    htmlstring+= "<li>" + title + "</li>";
  }
  //inject the HTML into our empty list
  $("#results").html(htmlstring);
}
