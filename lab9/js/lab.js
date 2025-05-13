// Lab 9 - Libraries and jQuery
// Author: Gabriel Specht
// Date: 5/12/2025

//adds 'Make Special' button
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#button-challenge").click(function(){
    //toggles challenge class to special
    $("#challenge").toggleClass("special");
});

//adds 'Make Special' button
$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#button-problems").click(function(){
    //toggles problems class to special
    $("#problems").toggleClass("special");
});

//adds 'Make Special' button
$("#results").append("<button id='button-results'>Make Special</button>");
$("#button-results").click(function(){
    //toggles results class to special
    $("#results").toggleClass("special");
});