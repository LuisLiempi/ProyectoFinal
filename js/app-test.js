
$(document).ready(function(){
    $("button").click(function(){
        $.get("https://api.spotify.com/v1/search?type=artist&q=bruno", function(data, status){
            //alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);

           
            alert("Data: " + JSON.stringify(data.artists.items[0].name) + "\nStatus: " + status);

            alert("Data: " + JSON.stringify(data.artists.items[0].images[0]) + "\nStatus: " + status);



        });
    });
});



//https://api.spotify.com/v1/search?q=bruno%20mars&type=artist