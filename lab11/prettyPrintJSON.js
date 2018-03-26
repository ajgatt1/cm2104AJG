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
    prettyPrintJSON(jsondata);
  });
}
function prettyPrintJSON(jsondata){
  //prints the prettyJSON to the screen
  var pretty = JSON.stringify(jsondata,null,4);
  $('#resultsbox').append("<pre>" + pretty + "</pre>");
}
