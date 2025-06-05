// Lab 16 - JSON and APIs
// Author: Gabriel Specht
// Date: 6/4/2025

// Object for the API
let comicObj = {
    url: "https://xkcd.com/" + Math.floor(Math.random() * 3098) + "/info.0.json",
    type: "GET",
    dataType: "JSON"
}

// Accesses API
$.ajax(comicObj)

//assigns variables from the API and displays them
.done(function(data){
    console.log(data);

    let comicTitle = data.title;
    let imgURL = data.img;
    let alt = data.alt;

$("#output").html("<h1>" + comicTitle + "<div>" + "<img src='" + imgURL + "'/>" + "<div>" + "<p>" + alt);
})
