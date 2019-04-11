// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */


$("#search-button").click(function(){
    var choise= $("input").val();
  $.ajax({

        url: "https://api.giphy.com/v1/gifs/search?q="+choise +"&rating=pg&api_key=dc6zaTOxFJmzC",
        method: "GET",
        success: function(response) {
         $('.text-center').append("<img src=" + response.data[0].images.fixed_width.url + ">");

        }});
});