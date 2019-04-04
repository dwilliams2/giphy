// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
 var typeSave =$("input").val();
 var custom_api_url = "https://api.giphy.com/v1/gifs/search?q="+typeSave +"&rating=pg&api_key=dc6zaTOxFJmzC";

$("#search-button").click(function(){

  $.ajax({
        url: custom_api_url,
        method: "GET",
        success: function(response) {
            console.log(response);
             console.log(response.data[0]);
             var url = response.data[0].url;
     $("row justify-content-center").append("<img src='"+url+"'/>");
           console.log(url);
        }});
});