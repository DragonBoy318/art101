// Lab 7 - Functions
// Author: Gabriel Specht
// Date: 5/4/2025

//myFunction - Prompts user text and returns sorted text
  let myFunction = function() {
    let person = window.prompt("name: ");
      return person.split('').sort().join(''); 
  }
  
  document.writeln(myFunction());