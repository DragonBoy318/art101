// Lab 12 - Conditionals
// Author: Gabriel Specht
// Date: 5/22/2025

//assigns a class based on given text
let sortingHat = function(str) {

    //gets module of text
    let mod = str.length%4;

    //assigns class based on module
    if (mod == 0){
        return "Mage";
    } else if (mod == 1){
        return "Fighter";
    } else if (mod == 2){
        return "Cleric";
    } else if (mod == 3){
        return "Rogue";
    } else {
        return "Failure";
    }
}

//executes sortingHat function on inserted text
$("#my-button").click(function(){
    //get name text
    let input = $("#input").val();
   
    //assign class using function
    let assignedClass = sortingHat(input);
    
    //display class
    $("#output").html('<p>' + "You have been assigned the class of: " + assignedClass + '</p>');
});