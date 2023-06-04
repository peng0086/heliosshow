$(function(){
    $("#StartButton").on("click",loadServerData);
});
function loadServerData(){
    
    $.getJSON("https://api.chucknorris.io/jokes/random")
    .done(function(data) {
        console.log("Success");
        $("#showjokeData").text(data.value);
    })
    .fail(function(){
        console.log("Error");
    })
    .always(function(){
        console.log("Always");
    });
}