// Lab 16 - JSON and APIs
// Author: Gabriel Specht
// Date: 6/4/2025


let comicObj = {
    url: "https://xkcd.com",
    data:{
        id: 614,
    },
    type: "GET",
    dataType: "JSON"
}


$.ajax(comicObj)

.done(function(data){
    console.log(data);

    let title = data.safe_title;
    let imgURL = data.img;
    let alt = data.alt;

    $("#output").html("<h1>" + title + "<div>" + `<img src='${imgURL}'/>`);
})
