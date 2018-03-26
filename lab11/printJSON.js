$(function(){
  //document ready
  alert("document ready");

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
    printJSON(jsondata);
  });
}
function printJSON(jsondata){
  //prints the JSON to the screen
  var normal = JSON.stringify(jsondata);
  $('#resultsbox').append("<p>" + normal + "</p>");
}
