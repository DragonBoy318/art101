// Lab 11 - javaScript Elements and Forms
// Author: Gabriel Specht
// Date: 5/19/2025

//sorts string
let myFunction = function(person) {
      return person.split('').sort().join(''); 
  }

  //submits user text and sorts it before displaying it
$("#my-button").click(function(){
    //get name text
    let userName = $("#user-name").val();
    //sort name text
    let sortedName = myFunction(userName);
    //display sorted text
    $("#output").html('<div class="text"><p>' + sortedName + '</p></div>');
});