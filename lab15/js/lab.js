// Lab 15 - AJAX
// Author: Gabriel Specht
// Date: 6/2/2025

//displays API when button is clicked

//clears the ouput 
$("#clear").click(function(){

    $("#output").html("");
})

//calls the API to generate a random pokemon
$("#single").click(function(){
    let ajaxObj = {
        url: "https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 1025),
        type: "GET",
        dataType: "json"
    }


    $.ajax(ajaxObj)
    .done(function(data){
        console.log(data);

    let pokemon = data.name;

    $("#output").append("<div>" + pokemon);

    })
})

//calls the API to generate a random pokemon but there are 6 of these
$("#button").click(function(){
    let ajaxObj = {
        url: "https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 1025),
        type: "GET",
        dataType: "json"
    }


    $.ajax(ajaxObj)
    .done(function(data){
        console.log(data);

    let pokemon = data.name;

    $("#output").append("<div>" + pokemon);

    })
})

$("#button").click(function(){
    let ajaxObj = {
        url: "https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 1025),
        type: "GET",
        dataType: "json"
    }


    $.ajax(ajaxObj)
    .done(function(data){
        console.log(data);

    let pokemon = data.name;

    $("#output").append("<div>" + pokemon);

    })
})

$("#button").click(function(){
    let ajaxObj = {
        url: "https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 1025),
        type: "GET",
        dataType: "json"
    }


    $.ajax(ajaxObj)
    .done(function(data){
        console.log(data);

    let pokemon = data.name;

    $("#output").append("<div>" + pokemon);

    })
})

$("#button").click(function(){
    let ajaxObj = {
        url: "https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 1025),
        type: "GET",
        dataType: "json"
    }


    $.ajax(ajaxObj)
    .done(function(data){
        console.log(data);

    let pokemon = data.name;

    $("#output").append("<div>" + pokemon);

    })
})

$("#button").click(function(){
    let ajaxObj = {
        url: "https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 1025),
        type: "GET",
        dataType: "json"
    }


    $.ajax(ajaxObj)
    .done(function(data){
        console.log(data);

    let pokemon = data.name;

    $("#output").append("<div>" + pokemon);

    })
})

$("#button").click(function(){
    let ajaxObj = {
        url: "https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 1025),
        type: "GET",
        dataType: "json"
    }


    $.ajax(ajaxObj)
    .done(function(data){
        console.log(data);

    let pokemon = data.name;

    $("#output").append("<div>" + pokemon);

    })
})

$("#button").click(function(){
    let ajaxObj = {
        url: "https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 1025),
        type: "GET",
        dataType: "json"
    }


    $.ajax(ajaxObj)
    .done(function(data){
        console.log(data);

    let pokemon = data.name;

    $("#output").append("<div>" + pokemon);

    })
})